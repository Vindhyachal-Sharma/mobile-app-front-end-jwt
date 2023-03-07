import { Component } from '@angular/core';
import { switchAll } from 'rxjs';
import { Order } from 'src/app/model/order';
import { Payment } from 'src/app/model/payment';
import { AdminService } from 'src/app/service/adminService/admin.service';
import { CustomerService } from 'src/app/service/customerService/customer.service';
import { LoginService } from 'src/app/service/login.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orderList: Order[] = [];
  customerId: any
  role: any
  payment: Payment = new Payment()


  loadMsg: String = "";
  delMsg: String = "";
  errorMsg: String = "";
  constructor(private customerService: CustomerService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadOrdersData()
  }

  loadOrdersData() {

    this.role = localStorage.getItem('role')
    if (this.role == "customer") {

      this.customerId = localStorage.getItem('userId')
      this.customerService.getOrdersListOfCustomer(this.customerId)
        .subscribe(
          {
            next: (data) => {
              console.log(data);

              this.orderList = data.reverse();
             
              this.loadMsg = "Fetched all orders, Success!";
              this.errorMsg = "";
            },
            error: (error) => {
              console.log(error);
              this.errorMsg = "Could not fetch all orders, please try after some time.";
              this.loadMsg = "";
            }
          });
    }
    else {
      this.adminService.getAllOrders()
        .subscribe(
          {
            next: (data) => {
              console.log(data);

              this.orderList = data.reverse();

              this.loadMsg = "Fetched all orders, Success!";
              this.errorMsg = "";
            },
            error: (error) => {
              console.log(error);
              this.errorMsg = "Could not fetch all orders, please try after some time.";
              this.loadMsg = "";
            }
          });
    }



  }
  cancelOrder(orderId: any) {
    let customerId: any = localStorage.getItem('userId')
    const id: number = +customerId!;
    Swal.fire({
      title: 'Are you sure want to Cancel Order?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Cancel it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.cancelOrderById(customerId, orderId)
          .subscribe(
            {
              next: (data) => {
                console.log("cancel order id:" + orderId);
                this.errorMsg = "";
                // reload customer data
                
                window.location.reload()
              },
              error: (error) => {
                console.log(error)
                this.errorMsg = "Could not Cancel Order:" + orderId;
                this.delMsg = "";
              }
            }
          )


      }
    })
  }
}

