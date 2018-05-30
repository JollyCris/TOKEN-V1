import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfRefLtrComponent } from './lf-ref-ltr.component';

describe('LfRefLtrComponent', () => {
  let component: LfRefLtrComponent;
  let fixture: ComponentFixture<LfRefLtrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfRefLtrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfRefLtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
