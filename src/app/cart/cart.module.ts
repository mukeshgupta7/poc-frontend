import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  exports:[CartComponent]
})
export class CartModule { }

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CartComponent } from './cart.component';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   { path: '', component: CartComponent}
// ];




// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes)
//   ],
// })
// export class CartModule { 
//   constructor() {
//     console.log('cart component loaded');
//   }
// }


