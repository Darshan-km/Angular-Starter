import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppigListComponent } from './shoppig-list.component';

describe('ShoppigListComponent', () => {
  let component: ShoppigListComponent;
  let fixture: ComponentFixture<ShoppigListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppigListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
