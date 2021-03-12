import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VNumberComponent } from './v-number.component';

describe('VNumberComponent', () => {
  let component: VNumberComponent;
  let fixture: ComponentFixture<VNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
