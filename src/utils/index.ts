// From tw-colors: https://github.com/L-Blondy/tw-colors/blob/master/lib/index.ts
import { flatten } from 'flat';
import validateColor from 'validate-color';

const Color = require('color');

const SCHEME = Symbol('color-scheme');
const emptyConfig: TwcConfig = {};

type NestedStyles = { [SCHEME]?: 'light' | 'dark' } & MaybeNested<
  string,
  string
>;
type FlatStyle = { [SCHEME]?: 'light' | 'dark' } & Record<string, string>;
type TwcObjectConfig<ThemeName extends string> = Record<
  ThemeName,
  NestedStyles
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
type ResolvedStyle = {
  [styleName: string]:
    | string
    | (({
        opacityValue,
        opacityVariable,
      }: {
        opacityValue: string;
        opacityVariable: string;
      }) => string);
};
type Resolved = {
  variants: ResolvedVariants;
  utilities: ResolvedUtilities;
  styles: ResolvedStyle;
};

export type TwcConfig<ThemeName extends string = string> =
  | TwcObjectConfig<ThemeName>
  | TwcFunctionConfig<ThemeName>;

export interface TwcOptions<ThemeName extends string = string> {
  produceCssVariable?: (styleName: string) => string;
  produceThemeClass?: (themeName: ThemeName) => string;
  produceThemeVariant?: (themeName: ThemeName) => string;
  defaultTheme?:
    | NoInfer<ThemeName>
    | (string & {})
    | DefaultThemeObject<ThemeName>;
  strict?: boolean;
  styleType?: string;
}

/**
 * Resolves the variants, base and styles to inject in the plugin
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
    styleType,
  }: TwcOptions<ThemeName> = {}
) => {
  const resolved: Resolved = {
    variants: [],
    utilities: {},
    styles: {},
  };
  const configObject =
    typeof config === 'function' ? config({ dark, light }) : config;

  // @ts-ignore forEach types fail to assign themeName
  Object.entries(configObject).forEach(([themeName, styles]: [themeName: ThemeName, styles: NestedStyles]) => {
      const themeClassName = produceThemeClass(themeName);
      const themeVariant = produceThemeVariant(themeName);

      const flatStyles = flattenStyles(styles);
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
      resolved.utilities[cssSelector] = styles[SCHEME]
        ? { 'color-scheme': styles[SCHEME] }
        : {};

      Object.entries(flatStyles).forEach(
        ([styleName, styleValue]: [styleName: string, styleValue: string]) => {
          // this case was handled above
          if ((styleName as any) === SCHEME) return;
          const safeStyleName = escapeChars(styleName, '/');

					const twcStyleVariable = produceCssVariable(safeStyleName);
					
					if (styleType === 'colors' && validateColor(styleValue)) {
            let [h, s, l, defaultAlphaValue]: HslaArray = [0, 0, 0, 1];
            try {
              [h, s, l, defaultAlphaValue] = toHslaArray(styleValue);
            } catch (error: any) {
              const message = `\r\nWarning - In theme "${themeName}" color "${styleName}". ${error.message}`;

              if (strict) {
                throw new Error(message);
              }
              return console.error(message);
            }

            const twcOpacityVariable = `${produceCssVariable(
              safeStyleName
            )}-opacity`;

            // add the css variables in "@layer utilities" for the hsl values
            const hslValues = `${h} ${s}% ${l}%`;
            resolved.utilities[cssSelector][twcStyleVariable] = hslValues;

            addRootUtilities(resolved.utilities, {
              key: twcStyleVariable,
              value: hslValues,
              defaultTheme,
              themeName,
            });

            if (typeof defaultAlphaValue === 'number') {
              // add the css variables in "@layer utilities" for the alpha
              const alphaValue = defaultAlphaValue.toFixed(2);
              resolved.utilities[cssSelector][twcOpacityVariable] = alphaValue;
              addRootUtilities(resolved.utilities, {
                key: twcOpacityVariable,
                value: alphaValue,
                defaultTheme,
                themeName,
              });
            }

            resolved.styles[styleName] = ({ opacityVariable, opacityValue }) => {
              // if the opacity is set  with a slash (e.g. bg-primary/90), use the provided value
              if (!isNaN(+opacityValue)) {
                return `hsl(var(${twcStyleVariable}) / ${opacityValue})`;
              }
              // if no opacityValue was provided (=it is not parsable to a number),
              // the twcOpacityVariable (opacity defined in the color definition rgb(0, 0, 0, 0.5))
              // should have the priority over the tw class based opacity(e.g. "bg-opacity-90")
              // This is how tailwind behaves as for v3.2.4
              if (opacityVariable) {
                return `hsl(var(${twcStyleVariable}) / var(${twcOpacityVariable}, var(${opacityVariable})))`;
              }
              return `hsl(var(${twcStyleVariable}) / var(${twcOpacityVariable}, 1))`;
						};
					} else if (styleType === 'colors') {
            // const colorValue = 'colors.' + styleValue.toLowerCase().replace(' ', '.');
            resolved.utilities[cssSelector][twcStyleVariable] = styleValue;

            addRootUtilities(resolved.utilities, {
              key: twcStyleVariable,
              value: styleValue,
              defaultTheme,
              themeName,
            });

						resolved.styles[styleName] = `var(${twcStyleVariable})`;
					}
					
          if (styleType !== 'colors') {
            resolved.utilities[cssSelector][twcStyleVariable] = styleValue;

            addRootUtilities(resolved.utilities, {
              key: twcStyleVariable,
              value: styleValue,
              defaultTheme,
              themeName,
            });
          }
          // set the dynamic style in tailwind config theme.styles
          if (styleType === 'fonts') resolved.styles[styleName] = `var(${twcStyleVariable})`;
        }
      );
    }
  );

  return resolved;
};

function escapeChars(str: string, ...chars: string[]) {
  let result = str;
  for (let char of chars) {
    const regexp = new RegExp(char, 'g');
    result = str.replace(regexp, '\\' + char);
  }
  return result;
}

function flattenStyles(style: NestedStyles) {
  const flatStyleWithDEFAULT: FlatStyle = flatten(style, {
    safe: true,
    delimiter: '-',
  });

  return Object.entries(flatStyleWithDEFAULT).reduce((acc, [key, value]) => {
    acc[key.replace(/\-DEFAULT$/, '')] = value;
    return acc;
  }, {} as FlatStyle);
}

function toHslaArray(colorValue?: string) {
  return Color(colorValue).hsl().round(1).array() as HslaArray;
}

function defaultProduceCssVariable(themeName: string) {
  return `--twc-${themeName}`;
}

function defaultProduceThemeClass(themeName: string) {
  return themeName;
}

function dark(
  styles: NestedStyles
): { [SCHEME]: 'dark' } & MaybeNested<string, string> {
  return {
    ...styles,
    [SCHEME]: 'dark',
  };
}

function light(
  styles: NestedStyles
): { [SCHEME]: 'light' } & MaybeNested<string, string> {
  return {
    ...styles,
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

type HslaArray = [number, number, number, number | undefined];
