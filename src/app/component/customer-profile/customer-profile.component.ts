import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { Customer } from 'src/app/model/customer';
import { AdminService } from 'src/app/service/adminService/admin.service';
import { LoginService } from 'src/app/service/authService/login.service';
import { CustomerService } from 'src/app/service/customerService/customer.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css'],
})
export class CustomerProfileComponent implements OnInit {
  customerId: any;
  adminId: any;
  customer: Customer = new Customer();
  admin: Admin = new Admin();
  user: any;
  isEditable: Boolean = false;

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private adminService: AdminService,
    public loginService: LoginService
  ) {}
  ngOnInit() {
    this.getCustomerData();
  }

  editClicked() {
    console.log(this.isEditable);
    this.isEditable = !this.isEditable;
  }

  getCustomerData() {
    this.customerId = localStorage.getItem('userId');
    this.customerService.getUserData(this.customerId).subscribe({
      next: (data) => {this.user = data;},
      error: (error) => {},
    });
  }

  updateCustomerData() {
    this.customerId = localStorage.getItem('userId');
    console.log(this.user);
    this.user.password = 'Abc@1234';
    this.customerService.updateUserData(this.customerId, this.user).subscribe({
      next: (data) => {this.getCustomerData();},
      error: (error) => {},
    });
  }

  deactivateAccount() {
    this.customerId = localStorage.getItem('userId');
    this.customerService.deactivateAccount(this.customerId).subscribe({
      next: (data) => {
        Swal.fire({
          icon:'success',
          title:'Account Deactivated Successfully',
        }).then()
        this.loginService.logout()
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
