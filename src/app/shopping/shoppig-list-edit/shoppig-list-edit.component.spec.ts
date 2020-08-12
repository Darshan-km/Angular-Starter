import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppigListEditComponent } from './shoppig-list-edit.component';

describe('ShoppigListEditComponent', () => {
  let component: ShoppigListEditComponent;
  let fixture: ComponentFixture<ShoppigListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppigListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppigListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
