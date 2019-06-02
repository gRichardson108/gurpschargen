import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitTableComponent } from './trait-table.component';

describe('TraitTableComponent', () => {
  let component: TraitTableComponent;
  let fixture: ComponentFixture<TraitTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
