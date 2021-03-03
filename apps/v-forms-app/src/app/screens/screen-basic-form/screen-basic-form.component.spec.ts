import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenBasicFormComponent } from './screen-basic-form.component';

describe('ScreenBasicFormComponent', () => {
  let component: ScreenBasicFormComponent;
  let fixture: ComponentFixture<ScreenBasicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenBasicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenBasicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
