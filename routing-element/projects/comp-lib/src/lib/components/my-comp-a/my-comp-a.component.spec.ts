import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompAComponent } from './my-comp-a.component';

describe('MyCompAComponent', () => {
  let component: MyCompAComponent;
  let fixture: ComponentFixture<MyCompAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
