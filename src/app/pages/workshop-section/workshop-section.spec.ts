import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopSection } from './workshop-section';

describe('WorkshopSection', () => {
  let component: WorkshopSection;
  let fixture: ComponentFixture<WorkshopSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopSection],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkshopSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
