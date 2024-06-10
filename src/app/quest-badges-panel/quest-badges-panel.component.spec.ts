import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestBadgesPanelComponent } from './quest-badges-panel.component';

describe('QuestBadgesPanelComponent', () => {
  let component: QuestBadgesPanelComponent;
  let fixture: ComponentFixture<QuestBadgesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestBadgesPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestBadgesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
