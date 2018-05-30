import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfDtpassClassComponent } from './lf-dtpass-class.component';

describe('LfDtpassClassComponent', () => {
  let component: LfDtpassClassComponent;
  let fixture: ComponentFixture<LfDtpassClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfDtpassClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfDtpassClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
