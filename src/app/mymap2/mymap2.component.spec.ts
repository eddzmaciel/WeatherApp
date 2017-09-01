import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mymap2Component } from './mymap2.component';

describe('Mymap2Component', () => {
  let component: Mymap2Component;
  let fixture: ComponentFixture<Mymap2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mymap2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mymap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
