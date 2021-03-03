import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDatePickerComponent } from './v-date-picker.component';

describe('VDatePickerComponent', () => {
  let component: VDatePickerComponent;
  let fixture: ComponentFixture<VDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VDatePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
