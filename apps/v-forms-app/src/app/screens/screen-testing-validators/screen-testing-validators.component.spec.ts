import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenTestingValidatorsComponent } from './screen-testing-validators.component';

describe('ScreenTestingValidatorsComponent', () => {
  let component: ScreenTestingValidatorsComponent;
  let fixture: ComponentFixture<ScreenTestingValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenTestingValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenTestingValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
