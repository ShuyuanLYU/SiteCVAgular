import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormationComponent } from './test-formation.component';

describe('TestFormationComponent', () => {
  let component: TestFormationComponent;
  let fixture: ComponentFixture<TestFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
