import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VInputComponent } from './v-input.component';

describe('VInputComponent', () => {
  let component: VInputComponent;
  let fixture: ComponentFixture<VInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
