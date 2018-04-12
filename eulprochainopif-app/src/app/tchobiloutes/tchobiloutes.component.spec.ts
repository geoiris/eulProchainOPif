import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchobiloutesComponent } from './tchobiloutes.component';

describe('TchobiloutesComponent', () => {
  let component: TchobiloutesComponent;
  let fixture: ComponentFixture<TchobiloutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchobiloutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchobiloutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
