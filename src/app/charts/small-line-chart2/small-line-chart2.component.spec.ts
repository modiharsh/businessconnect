import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallLineChart2Component } from './small-line-chart2.component';

describe('SmallLineChart2Component', () => {
  let component: SmallLineChart2Component;
  let fixture: ComponentFixture<SmallLineChart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallLineChart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallLineChart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
