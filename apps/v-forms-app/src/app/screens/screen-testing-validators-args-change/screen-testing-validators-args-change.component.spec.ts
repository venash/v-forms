import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTestingValidatorsArgsChangeComponent } from './screen-testing-validators-args-change.component';

describe('ScreenTestingValidatorsArgsChangeComponent', () => {
  let component: ScreenTestingValidatorsArgsChangeComponent;
  let fixture: ComponentFixture<ScreenTestingValidatorsArgsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTestingValidatorsArgsChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenTestingValidatorsArgsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
