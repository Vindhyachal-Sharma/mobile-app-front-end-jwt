import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Customer } from 'src/app/model/customer';
import { Mobile } from 'src/app/model/mobile';
import { Order } from 'src/app/model/order';

import { AdminService } from 'src/app/service/adminService/admin.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  customers: Customer[] = [];
  customersListSize: any
  categories: Category[] = [];
  categoryListSize: any
  mobilesList: Mobile[] = [];
  mobileListSize: any

  ordersList: Order[] = []
  orderListSize: any


  constructor(public user: LoginService, private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.loadAllCustomers()
    this.loadAllOrders()
    this.loadAllCategories()

  }

  loadAllMobiles() {
    this.adminService.getAllMobiles()
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.mobilesList = data;
            this.mobileListSize = this.mobilesList.length
          },
          error: (error) => {
          }
        });
  }

  loadAllOrders() {
    this.adminService.getAllOrders()
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.ordersList = data;
            this.orderListSize = this.ordersList.length
          },
          error: (error) => {
          }
        });
  }




  loadAllCustomers() {
    this.adminService.getAllCustomers()
      .subscribe(
        {
          next: (data) => {
            console.log(data);

            this.customers = data;
            this.customersListSize = this.customers.length

          },
          error: (error) => {
            console.log(error);

          }
        });

  }

  loadAllCategories() {
    this.adminService.getAllCategories()
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.categories = data;

            this.categoryListSize = this.categories.length
          },
          error: (error) => {
            console.log(error);
          }
        });

  }
  loadAllPayments() {
    this.adminService.getAllPayments()
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.ordersList = data;
            this.orderListSize = this.ordersList.length
          },
          error: (error) => {
          }
        });
  }

  gotoCategory() {
    this.router.navigate(['category']);
  }


}






