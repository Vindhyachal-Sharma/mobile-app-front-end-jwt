import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CustomerProfileComponent } from './component/customer-profile/customer-profile.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { CategoryComponent } from './component/category/create-category/category.component';

import { OrderComponent } from './component/order/order.component';
import { AddMobileToCategoryComponent } from './component/category/add-mobile-to-category/add-mobile-to-category.component';
import { ErrorComponent } from './component/error/error.component';
import { UserHomeComponent } from './component/user-home/user-home.component';
import { UpdateMobileComponent } from './component/category/update-mobile/update-mobile.component';
import { GetAllMobilesComponent } from './component/category/get-all-mobiles/get-all-mobiles.component';
import { GetAllCustomerComponent } from './component/admin/get-all-customer/get-all-customer.component';



const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register',component:RegisterComponent},
  { path: 'profile',component:CustomerProfileComponent},
  { path: 'adminHome',component:AdminHomeComponent},
  { path: 'category',component:CategoryComponent},
  { path: 'user',component:UserHomeComponent},
  { path: 'orderList',component:OrderComponent},
  { path: 'addMob',component:AddMobileToCategoryComponent},
  { path: 'updateMob',component:UpdateMobileComponent},
  { path: 'getAllMob',component:GetAllMobilesComponent},
  { path: 'getAllCust',component:GetAllCustomerComponent},
  { path: '**',component:ErrorComponent},
 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
