import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTraitPurchaserComponent } from './character-trait-purchaser.component';

describe('CharacterTraitPurchaserComponent', () => {
  let component: CharacterTraitPurchaserComponent;
  let fixture: ComponentFixture<CharacterTraitPurchaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterTraitPurchaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterTraitPurchaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
