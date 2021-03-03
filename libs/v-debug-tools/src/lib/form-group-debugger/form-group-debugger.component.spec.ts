import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupDebuggerComponent } from './form-group-debugger.component';

describe('FormGroupDebuggerComponent', () => {
  let component: FormGroupDebuggerComponent;
  let fixture: ComponentFixture<FormGroupDebuggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupDebuggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupDebuggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
