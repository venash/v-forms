import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDisabledControlsComponent } from './screen-disabled-controls.component';

describe('ScreenDisabledControlsComponent', () => {
  let component: ScreenDisabledControlsComponent;
  let fixture: ComponentFixture<ScreenDisabledControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenDisabledControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenDisabledControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
