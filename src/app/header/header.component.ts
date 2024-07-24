import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// Plugin your cleaned up code from theme switcher here
// so the select dropwdown will be displayed in the header, 
// instead of on the Bio Header Panel

theme: string = localStorage.getItem('theme') || '';

	constructor(private router: Router) {}
  
	ngOnInit() {
		if (this.theme) document.body.dataset['theme'] = this.theme;
		
    let switcher = document.getElementById(
      'themeoptions'
		)! as HTMLSelectElement;
    
		switcher?.addEventListener('change', (e: Event) => {
			let selectedThemeIndex: number = switcher.options.selectedIndex;
			let switcherTheme =
				switcher.options[selectedThemeIndex].getAttribute('value');
			const selectedTheme = switcherTheme || 'grey';
      localStorage.setItem('theme', selectedTheme);
			this.theme = selectedTheme;
			document.body.dataset['theme'] = switcherTheme!;
    });
  }

}
