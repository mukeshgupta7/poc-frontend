import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { BooksComponent } from './admin/books/books.component';
import { ShopbookComponent } from './shopbook/shopbook.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
// import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin/users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'admin/books', component: BooksComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ShopbookComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) }
  //{ path: 'cart', loadChildren: './cart/cart.module#CartModule' }
  //loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  // { path: 'cart', component: CartComponent },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
