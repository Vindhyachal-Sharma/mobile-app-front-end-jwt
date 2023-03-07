import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Payment } from 'src/app/model/payment';

import { CustomerService } from 'src/app/service/customerService/customer.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  cart: Cart = new Cart()
  public grandTotal!: number;
  customerId: any
  payment: Payment = new Payment()


  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.getCart()
  }

  
  paymentType() { if (this.payment.paymentMode == "COD") 
  { 
    this.payment.paymentStatus = "PENDING" 
  } else if (this.payment.paymentMode == "UPI"
  ) { this.payment.paymentStatus = "PAID" } }


  getCart() {
    this.customerId = localStorage.getItem('userId')
    this.customerService.getCart(this.customerId)
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.cart = data
            this.products = data.mobiles

          },
          error: (error) => {
          }
        });
  }

  removeItem(mobileId: number) {
    this.customerId = localStorage.getItem('userId')
    this.customerService.removeMobFromCart(this.customerId, mobileId)
      .subscribe(
        {
          next: (data) => {
            window.location.reload();

          },
          error: (error) => {
          }
        });

  }

  emptycart() {
    this.customerId = localStorage.getItem('userId')
    this.customerService.emptyCart(this.customerId)
      .subscribe(
        {
          next: (data) => {

          },
          error: (error) => {

          }
        });
    window.location.reload()
  }

  checkout() {
    this.customerId = localStorage.getItem('userId')
    this.customerService.checkout(this.payment, this.customerId).subscribe(
      {
        next: (data) => {
          console.log(data)
          this.getCart()
        },
        error: (error) => {
          console.log(error)

        }
      }
    )
  }

}
