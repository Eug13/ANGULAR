import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptEditComponent } from './recept-edit.component';

describe('ReceptEditComponent', () => {
  let component: ReceptEditComponent;
  let fixture: ComponentFixture<ReceptEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
