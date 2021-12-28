import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompBComponent } from './my-comp-b.component';

describe('MyCompBComponent', () => {
  let component: MyCompBComponent;
  let fixture: ComponentFixture<MyCompBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
