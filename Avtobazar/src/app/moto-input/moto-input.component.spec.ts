import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoInputComponent } from './moto-input.component';

describe('MotoInputComponent', () => {
  let component: MotoInputComponent;
  let fixture: ComponentFixture<MotoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
