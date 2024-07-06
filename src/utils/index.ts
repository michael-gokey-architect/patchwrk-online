// From tw-colors: https://github.com/L-Blondy/tw-colors/blob/master/lib/index.ts

import { flatten } from 'flat';

const plugin = require('tailwindcss/plugin');
const forEach = require('lodash.foreach');

const SCHEME = Symbol('color-scheme');
const emptyConfig: TwcConfig = {};

type NestedFonts = { [SCHEME]?: 'light' | 'dark' } & MaybeNested<
  string,
  string
>;
type FlatFonts = { [SCHEME]?: 'light' | 'dark' } & Record<string, string>;
type TwcObjectConfig<ThemeName extends string> = Record<
  ThemeName,
  NestedFonts
>;
type TwcFunctionConfig<ThemeName extends string> = (scheme: {
  light: typeof light;
  dark: typeof dark;
}) => TwcObjectConfig<ThemeName>;

type DefaultThemeObject<ThemeName = any> = {
  light: NoInfer<ThemeName> | (string & {});
  dark: NoInfer<ThemeName> | (string & {});
};

type ResolvedVariants = Array<{ name: string; definition: string[] }>;
type ResolvedUtilities = { [selector: string]: Record<string, any> };
type ResolvedFonts = {
  [fontName: string]: () => string;
};
type Resolved = {
  variants: ResolvedVariants;
  utilities: ResolvedUtilities;
  fonts: ResolvedFonts;
};

export type TwcConfig<ThemeName extends string = string> =
  | TwcObjectConfig<ThemeName>
  | TwcFunctionConfig<ThemeName>;

export interface TwcOptions<ThemeName extends string = string> {
  produceCssVariable?: (fontName: string) => string;
  produceThemeClass?: (themeName: ThemeName) => string;
  produceThemeVariant?: (themeName: ThemeName) => string;
  defaultTheme?:
    | NoInfer<ThemeName>
    | (string & {})
    | DefaultThemeObject<ThemeName>;
  strict?: boolean;
}

/**
 * Resolves the variants, base and fonts to inject in the plugin
 * Library authors might use this function instead of the createThemes function
 */
export const resolveTwcConfig = <ThemeName extends string>(
  config: TwcConfig<ThemeName> = emptyConfig,
  {
    produceCssVariable = defaultProduceCssVariable,
    produceThemeClass = defaultProduceThemeClass,
    produceThemeVariant = produceThemeClass,
    defaultTheme,
    strict = false,
  }: TwcOptions<ThemeName> = {}
) => {
  const resolved: Resolved = {
    variants: [],
    utilities: {},
    fonts: {},
  };
  const configObject =
		typeof config === 'function' ? config({ dark, light }) : config;
	// @ts-ignore forEach types fail to assign themeName
	forEach(configObject, (fonts: NestedFonts, themeName: ThemeName) => {
    const themeClassName = produceThemeClass(themeName);
    const themeVariant = produceThemeVariant(themeName);

    const flatFonts = flattenFonts(fonts);
    // set the resolved.variants
    resolved.variants.push({
      name: themeVariant,
      // tailwind will generate only the first matched definition
      definition: [
        generateVariantDefinitions(`.${themeClassName}`),
        generateVariantDefinitions(`[data-theme='${themeName}']`),
        generateRootVariantDefinitions(themeName, defaultTheme),
      ].flat(),
    });

    const cssSelector = `.${themeClassName},[data-theme="${themeName}"]`;
    // set the color-scheme css property
    resolved.utilities[cssSelector] = fonts[SCHEME]
      ? { 'color-scheme': fonts[SCHEME] }
      : {};

		forEach(flatFonts, (fontValue, fontName) => {
      // this case was handled above
      if ((fontName as any) === SCHEME) return;
      const safeFontName = escapeChars(fontName, '/');

      const twcFontVariable = produceCssVariable(safeFontName);
      // add the css variables in "@layer utilities" for the hsl values

			resolved.utilities[cssSelector][twcFontVariable] = [fontValue];
      addRootUtilities(resolved.utilities, {
        key: twcFontVariable,
        value: fontValue,
        defaultTheme,
        themeName,
			});
      // set the dynamic font in tailwind config theme.fonts
			resolved.fonts[fontName] = () => {
        return `["var(${twcFontVariable})"]`;
			};
    });
  });

	return resolved;
};

export const createThemeFonts = <ThemeName extends string>(
  config: TwcConfig<ThemeName> = emptyConfig,
  options: TwcOptions<ThemeName> = {}
) => {
	const resolved = resolveTwcConfig(config, options);
	console.log(resolved)
	console.log(resolved.fonts['body']())
	return plugin(
    ({ addUtilities, addVariant }) => {
      // add the css variables to "@layer utilities" because:
      // - The Base layer does not provide intellisense
      // - The Components layer might get overriden by tailwind default fonts in case of name clash
      addUtilities(resolved.utilities);
      // add the theme as variant e.g. "theme-[name]:text-2xl"
      resolved.variants.forEach(({ name, definition }) =>
        addVariant(name, definition)
      );
    },
    // extend the fonts config
    {
      theme: {
        extend: {
          colors: {
            'red-900': 'hsla(0, 0%, 0%, 1)',
          },
          // @ts-ignore tailwind types are broken
          fontFamily: resolved.fonts,
        },
      },
    }
  );
};

function escapeChars(str: string, ...chars: string[]) {
  let result = str;
  for (let char of chars) {
    const regexp = new RegExp(char, 'g');
    result = str.replace(regexp, '\\' + char);
  }
  return result;
}

function flattenFonts(fonts: NestedFonts) {
  const flatFontsWithDEFAULT: FlatFonts = flatten(fonts, {
    safe: true,
    delimiter: '-',
  });

  return Object.entries(flatFontsWithDEFAULT).reduce((acc, [key, value]) => {
    acc[key.replace(/\-DEFAULT$/, '')] = value;
    return acc;
  }, {} as FlatFonts);
}

function defaultProduceCssVariable(themeName: string) {
  return `--twc-${themeName}`;
}

function defaultProduceThemeClass(themeName: string) {
  return themeName;
}

function dark(
  fonts: NestedFonts
): { [SCHEME]: 'dark' } & MaybeNested<string, string> {
  return {
    ...fonts,
    [SCHEME]: 'dark',
  };
}

function light(
  fonts: NestedFonts
): { [SCHEME]: 'light' } & MaybeNested<string, string> {
  return {
    ...fonts,
    [SCHEME]: 'light',
  };
}

function generateVariantDefinitions(selector: string) {
  return [
    `${selector}&`,
    `:is(${selector} > &:not([data-theme]))`,
    `:is(${selector} &:not(${selector} [data-theme]:not(${selector}) * ))`,
    `:is(${selector}:not(:has([data-theme])) &:not([data-theme]))`,
  ];
}

function generateRootVariantDefinitions<ThemeName extends string>(
  themeName: ThemeName,
  defaultTheme: TwcOptions<ThemeName>['defaultTheme']
) {
  const baseDefinitions = [
    `:root&`,
    `:is(:root > &:not([data-theme]))`,
    `:is(:root &:not([data-theme] *):not([data-theme]))`,
  ];

  if (typeof defaultTheme === 'string' && themeName === defaultTheme) {
    return baseDefinitions;
  }

  if (typeof defaultTheme === 'object' && themeName === defaultTheme.light) {
    return baseDefinitions.map(
      (definition) => `@media (prefers-color-scheme: light){${definition}}`
    );
  }

  if (typeof defaultTheme === 'object' && themeName === defaultTheme.dark) {
    return baseDefinitions.map(
      (definition) => `@media (prefers-color-scheme: dark){${definition}}`
    );
  }
  return [];
}

// hande the defaultTheme utils
function addRootUtilities<ThemeName extends string>(
  utilities: ResolvedUtilities,
  {
    key,
    value,
    defaultTheme,
    themeName,
  }: {
    key: string;
    value: string;
    defaultTheme: TwcOptions<ThemeName>['defaultTheme'];
    themeName: ThemeName;
  }
) {
  if (!defaultTheme) return;
  if (typeof defaultTheme === 'string') {
    if (themeName === defaultTheme) {
      // initialize
      if (!utilities[':root']) {
        utilities[':root'] = {};
      }
      // set
      utilities[':root'][key] = value;
    }
  } else if (themeName === defaultTheme.light) {
    // initialize
    if (!utilities['@media (prefers-color-scheme: light)']) {
      utilities['@media (prefers-color-scheme: light)'] = {
        ':root': {},
      };
    }
    // set
    utilities['@media (prefers-color-scheme: light)'][':root'][key] = value;
  } else if (themeName === defaultTheme.dark) {
    // initialize
    if (!utilities['@media (prefers-color-scheme: dark)']) {
      utilities['@media (prefers-color-scheme: dark)'] = {
        ':root': {},
      };
    }
    // set
    utilities['@media (prefers-color-scheme: dark)'][':root'][key] = value;
  }
}

interface MaybeNested<K extends keyof any = string, V extends string = string> {
  [key: string]: V | MaybeNested<K, V>;
}

type NoInfer<T> = [T][T extends any ? 0 : never];