import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeBuildSection } from './what-we-build-section';

describe('WhatWeBuildSection', () => {
  let component: WhatWeBuildSection;
  let fixture: ComponentFixture<WhatWeBuildSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeBuildSection],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatWeBuildSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
