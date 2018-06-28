import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptItemComponent } from './recept-item.component';

describe('ReceptItemComponent', () => {
  let component: ReceptItemComponent;
  let fixture: ComponentFixture<ReceptItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
