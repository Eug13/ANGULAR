import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoViewComponent } from './moto-view.component';

describe('MotoViewComponent', () => {
  let component: MotoViewComponent;
  let fixture: ComponentFixture<MotoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
