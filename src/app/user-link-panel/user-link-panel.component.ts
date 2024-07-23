import { Component } from '@angular/core';

@Component({
  selector: 'app-user-link-panel',
  templateUrl: './user-link-panel.component.html',
  styleUrls: ['./user-link-panel.component.css']
})
export class UserLinkPanelComponent {


  onLinkedInClick() {
    window.open('https://www.linkedin.com/in/bianchijohn/', '_blank');
  }
  onPatchWrkClick() {
    window.open('https://www.circlepass.io/patchwrq', '_blank');
  }
  onQuestAppClick() {
    window.open('https://www.circlepass.io/quest', '_blank');
  }
  
}
