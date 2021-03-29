import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VInputErrorComponent } from './v-input-error.component';

describe('VInputErrorComponent', () => {
  let component: VInputErrorComponent;
  let fixture: ComponentFixture<VInputErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VInputErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VInputErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
