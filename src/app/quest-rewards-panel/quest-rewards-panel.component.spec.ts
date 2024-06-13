import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestRewardsPanelComponent } from './quest-rewards-panel.component';

describe('QuestRewardsPanelComponent', () => {
  let component: QuestRewardsPanelComponent;
  let fixture: ComponentFixture<QuestRewardsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestRewardsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestRewardsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
