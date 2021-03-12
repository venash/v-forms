import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAddressComponent } from './screen-address.component';

describe('ScreenAddressComponent', () => {
  let component: ScreenAddressComponent;
  let fixture: ComponentFixture<ScreenAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
