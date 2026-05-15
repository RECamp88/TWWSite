import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreSection } from './who-we-are-section';

describe('WhoWeAreSection', () => {
  let component: WhoWeAreSection;
  let fixture: ComponentFixture<WhoWeAreSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoWeAreSection],
    }).compileComponents();

    fixture = TestBed.createComponent(WhoWeAreSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
