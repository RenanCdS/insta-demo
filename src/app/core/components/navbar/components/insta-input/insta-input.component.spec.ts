import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaInputComponent } from './insta-input.component';

describe('InstaInputComponent', () => {
  let component: InstaInputComponent;
  let fixture: ComponentFixture<InstaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the flag show to false when initializated', () => {
    // arrange 
    component = new InstaInputComponent();

    // assert
    expect(component.show).toBe(false);
  })

  it('should set the flag show to true when the method onInputOpen is called', () => {
    // arrange
    component = new InstaInputComponent();

    // act 
    component.onInputOpen();

    // assert
    expect(component.show).toBe(true);
  });

  it('should set the flag show to false when the method onInputClose is called', () => {
    // arrange
    component = new InstaInputComponent();

    // act 
    component.onInputClose();

    // assert
    expect(component.show).toBe(false);
  });
});
