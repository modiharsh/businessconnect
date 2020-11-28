import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallLineChart3Component } from './small-line-chart3.component';

describe('SmallLineChart3Component', () => {
  let component: SmallLineChart3Component;
  let fixture: ComponentFixture<SmallLineChart3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallLineChart3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallLineChart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
