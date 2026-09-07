import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { HomeComponent } from './components/home/home';
import { ProductsComponent } from './components/products/products';
import { CartComponent } from './components/cart/cart';
import { OrdersComponent } from './components/orders/orders';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  // Public pages
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Protected pages
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [authGuard] }

];