import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBioHeaderPanelComponent } from './user-bio-header-panel.component';

describe('UserBioHeaderPanelComponent', () => {
  let component: UserBioHeaderPanelComponent;
  let fixture: ComponentFixture<UserBioHeaderPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBioHeaderPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBioHeaderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
