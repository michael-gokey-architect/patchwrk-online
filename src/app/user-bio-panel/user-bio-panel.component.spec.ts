import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBioPanelComponent } from './user-bio-panel.component';

describe('UserBioPanelComponent', () => {
  let component: UserBioPanelComponent;
  let fixture: ComponentFixture<UserBioPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBioPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
