import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLinkPanelComponent } from './user-link-panel.component';

describe('UserLinkPanelComponent', () => {
  let component: UserLinkPanelComponent;
  let fixture: ComponentFixture<UserLinkPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLinkPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLinkPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
