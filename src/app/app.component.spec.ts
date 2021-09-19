import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BooksComponent } from './admin/books/books.component';
import { UsersComponent } from './admin/users/users.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopbookComponent } from './shopbook/shopbook.component';
import { MenuComponent } from './menu/menu.component';

describe('AppComponent', () => {

  // const routes: Routes = [
  //   { path: '',   redirectTo: '/login', pathMatch: 'full' },
  //   { path: 'admin/users', component: UsersComponent, canActivate: [AuthGuard] },
  //   { path: 'admin/books', component: BooksComponent, canActivate: [AuthGuard] },
  //   { path: 'shop', component: ShopbookComponent, canActivate: [AuthGuard] },
  //   { path: 'login', component: LoginComponent },
  //   { path: 'register', component: RegisterComponent },
  //   { path: 'cart', component: CartComponent }
  // ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        MenuComponent
      ]
      // providers: [
      //   { provide: APP_BASE_HREF, useValue: '/' }
      // ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'E-Commerce'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('E-Commerce');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('book-store app is running!');
  // });
});
