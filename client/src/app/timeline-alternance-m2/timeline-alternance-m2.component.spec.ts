import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineAlternanceM2Component } from './timeline-alternance-m2.component';

describe('TimelineAlternanceM2Component', () => {
  let component: TimelineAlternanceM2Component;
  let fixture: ComponentFixture<TimelineAlternanceM2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineAlternanceM2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineAlternanceM2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
