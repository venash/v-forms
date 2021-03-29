import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComplexComponent } from './address-complex.component';

describe('AddressComplexComponent', () => {
  let component: AddressComplexComponent;
  let fixture: ComponentFixture<AddressComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressComplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
