import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAddressComplexComponent } from './screen-address-complex.component';

describe('ScreenAddressComplexComponent', () => {
  let component: ScreenAddressComplexComponent;
  let fixture: ComponentFixture<ScreenAddressComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAddressComplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAddressComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
