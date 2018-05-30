import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LfIssuingAuthComponent } from './lf-issuing-auth.component';

describe('LfIssuingAuthComponent', () => {
  let component: LfIssuingAuthComponent;
  let fixture: ComponentFixture<LfIssuingAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfIssuingAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LfIssuingAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
