import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CustomerProfileComponent } from './component/customer-profile/customer-profile.component';
import { CategoryComponent } from './component/category/create-category/category.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { OrderComponent } from './component/order/order.component';
import { AddMobileToCategoryComponent } from './component/category/add-mobile-to-category/add-mobile-to-category.component';
import { UserHomeComponent } from './component/user-home/user-home.component';
import { UpdateMobileComponent } from './component/category/update-mobile/update-mobile.component';
import { GetAllMobilesComponent } from './component/category/get-all-mobiles/get-all-mobiles.component';
import { GetAllCustomerComponent } from './component/admin/get-all-customer/get-all-customer.component';
import { ViewOrderDetailsComponent } from './component/order/view-order-details/view-order-details.component';
import { ViewCancelMobilesComponent } from './component/order/view-cancel-mobiles/view-cancel-mobiles.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,

    CustomerProfileComponent,
    CategoryComponent,
    AdminHomeComponent,
    OrderComponent,
    AddMobileToCategoryComponent,
    UserHomeComponent,

    UpdateMobileComponent,
    GetAllMobilesComponent,
    GetAllCustomerComponent,
    ViewOrderDetailsComponent,
    ViewCancelMobilesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
