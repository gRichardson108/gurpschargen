import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageLineDisplayComponent } from './advantage-line-display.component';

describe('AdvantageLineDisplayComponent', () => {
  let component: AdvantageLineDisplayComponent;
  let fixture: ComponentFixture<AdvantageLineDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvantageLineDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantageLineDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
