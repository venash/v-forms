import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCountryPercentageComponent } from './screen-country-percentage.component';

describe('ScreenCountryPercentageComponent', () => {
  let component: ScreenCountryPercentageComponent;
  let fixture: ComponentFixture<ScreenCountryPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenCountryPercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCountryPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
