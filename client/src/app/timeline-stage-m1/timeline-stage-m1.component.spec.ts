import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineStageM1Component } from './timeline-stage-m1.component';

describe('TimelineStageM1Component', () => {
  let component: TimelineStageM1Component;
  let fixture: ComponentFixture<TimelineStageM1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineStageM1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineStageM1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
