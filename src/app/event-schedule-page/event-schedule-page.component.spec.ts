import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSchedulePageComponent } from './event-schedule-page.component';

describe('EventSchedulePageComponent', () => {
  let component: EventSchedulePageComponent;
  let fixture: ComponentFixture<EventSchedulePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSchedulePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSchedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
