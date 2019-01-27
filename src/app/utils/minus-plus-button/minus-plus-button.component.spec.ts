import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MinusPlusButtonComponent} from './minus-plus-button.component';

describe('MinusPlusButtonComponent', () => {
  let component: MinusPlusButtonComponent;
  let fixture: ComponentFixture<MinusPlusButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MinusPlusButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinusPlusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
