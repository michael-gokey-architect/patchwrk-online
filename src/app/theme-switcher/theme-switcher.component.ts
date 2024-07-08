import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
})
export class ThemeSwitcherComponent {
  userFullName = 'John Bianchi';
  theme: string = '';

	constructor(private router: Router) {}
  
	ngOnInit() {
    let switcher = document.getElementById(
      'themeoptions'
		)! as HTMLSelectElement;
    switcher?.addEventListener('change', (e: Event) => {
			let selectedThemeIndex: number = switcher.options.selectedIndex;
			let switcherTheme =
        switcher.options[selectedThemeIndex].getAttribute('value');
      localStorage.setItem(
        'theme',
        switcherTheme || 'grey'
      );
			this.theme = localStorage.getItem('theme')!;
			document.body.dataset['theme'] = switcherTheme!;
    });
  }

  onLinkedInClick() {
    window.open('https://www.linkedin.com/in/bianchijohn/', '_blank');
  }
  onPatchWRKClick() {
    window.open('https://www.circlepass.io/patchwrq', '_blank');
  }
  onQuestAppClick() {
    window.open('https://www.circlepass.io/quest', '_blank');
  }
}
