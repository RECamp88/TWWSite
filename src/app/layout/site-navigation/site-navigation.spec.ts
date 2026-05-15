import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNavigation } from './site-navigation';

describe('SiteNavigation', () => {
  let component: SiteNavigation;
  let fixture: ComponentFixture<SiteNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
