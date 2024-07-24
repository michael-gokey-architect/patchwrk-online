import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],
})
export class ThemeSwitcherComponent  implements OnInit  {
  userFullName = 'John Bianchi';
  theme: string = localStorage.getItem('theme') || '';

	constructor(private router: Router) {}
  
	ngOnInit() {
		// if (this.theme) document.body.dataset['theme'] = this.theme;
		
    // let switcher = document.getElementById(
    //   'themeoptions'
		// )! as HTMLSelectElement;
    
		// switcher?.addEventListener('change', (e: Event) => {
		// 	let selectedThemeIndex: number = switcher.options.selectedIndex;
		// 	let switcherTheme =
		// 		switcher.options[selectedThemeIndex].getAttribute('value');
		// 	const selectedTheme = switcherTheme || 'grey';
    //   localStorage.setItem('theme', selectedTheme);
		// 	this.theme = selectedTheme;
		// 	document.body.dataset['theme'] = switcherTheme!;
    // });
  }

  // onLinkedInClick() {
  //   window.open('https://www.linkedin.com/in/bianchijohn/', '_blank');
  // }
  // onPatchWrkClick() {
  //   window.open('https://www.circlepass.io/patchwrq', '_blank');
  // }
  // onQuestAppClick() {
  //   window.open('https://www.circlepass.io/quest', '_blank');
  // }
}
