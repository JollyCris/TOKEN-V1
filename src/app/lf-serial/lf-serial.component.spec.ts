import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfSerialComponent } from './lf-serial.component';

describe('LfSerialComponent', () => {
  let component: LfSerialComponent;
  let fixture: ComponentFixture<LfSerialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfSerialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfSerialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
