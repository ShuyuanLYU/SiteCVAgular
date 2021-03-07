import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineProjetTutoreComponent } from './timeline-projet-tutore.component';

describe('TimelineProjetTutoreComponent', () => {
  let component: TimelineProjetTutoreComponent;
  let fixture: ComponentFixture<TimelineProjetTutoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineProjetTutoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineProjetTutoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
