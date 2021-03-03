import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTestingValidatorsWithArgumentsComponent } from './screen-testing-validators-with-arguments.component';

describe('ScreenTestingValidatorsWithArgumentsComponent', () => {
  let component: ScreenTestingValidatorsWithArgumentsComponent;
  let fixture: ComponentFixture<ScreenTestingValidatorsWithArgumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTestingValidatorsWithArgumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenTestingValidatorsWithArgumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
