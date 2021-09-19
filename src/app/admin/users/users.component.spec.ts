import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdduserComponent } from './adduser/adduser.component';

import { UsersComponent } from './users.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent, AdduserComponent, ViewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
