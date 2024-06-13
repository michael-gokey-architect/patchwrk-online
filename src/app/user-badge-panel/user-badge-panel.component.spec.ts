import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBadgePanelComponent } from './user-badge-panel.component';

describe('UserBadgePanelComponent', () => {
  let component: UserBadgePanelComponent;
  let fixture: ComponentFixture<UserBadgePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBadgePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBadgePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
