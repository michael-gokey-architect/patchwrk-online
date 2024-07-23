import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBioAboutPanelComponent } from './user-bio-about-panel.component';

describe('UserBioAboutPanelComponent', () => {
  let component: UserBioAboutPanelComponent;
  let fixture: ComponentFixture<UserBioAboutPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBioAboutPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBioAboutPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
