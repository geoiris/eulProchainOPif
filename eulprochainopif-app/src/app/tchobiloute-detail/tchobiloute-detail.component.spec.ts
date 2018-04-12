import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchobilouteDetailComponent } from './tchobiloute-detail.component';

describe('TchobilouteDetailComponent', () => {
  let component: TchobilouteDetailComponent;
  let fixture: ComponentFixture<TchobilouteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchobilouteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchobilouteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
