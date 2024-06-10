import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestRewardsPageComponent } from './quest-rewards-page.component';

describe('QuestRewardsPageComponent', () => {
  let component: QuestRewardsPageComponent;
  let fixture: ComponentFixture<QuestRewardsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestRewardsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestRewardsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
