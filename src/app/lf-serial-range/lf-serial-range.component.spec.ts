import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfSerialRangeComponent } from './lf-serial-range.component';

describe('LfSerialRangeComponent', () => {
  let component: LfSerialRangeComponent;
  let fixture: ComponentFixture<LfSerialRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfSerialRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfSerialRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
