import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customerService/customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  customerId: any
  user:Customer=new Customer()
  
  
  constructor(private router:Router,private customerService:CustomerService ){}
  ngOnInit(){
    this.getCustomerData()


  }
  
  getCustomerData(){
    this.customerId = localStorage.getItem('userId')
    this.customerService.getUserData(this.customerId)
      .subscribe(
        {
          next: (data) => {
            this.user = data;
          },
          error: (error) => {
          
            
          }
        });


  }
  
  updateCustomerData(){
    this.customerId = localStorage.getItem('userId')
    // const temp=localStorage.getItem('userId')
   
    // var id:number=+temp!;
    console.log(this.user)
    this.user.password="Abc@1234"
    this.customerService.updateUserData(this.customerId,this.user)
      .subscribe(
        {
          next: (data) => {
           
            console.log(data)
            this.getCustomerData()
           
          },
          error: (error) => {
            
          console.log(error)
            
          }
        });


  }




  // }
  







  goToOrder(){
    this.router.navigate(['orderList'])
  }
  onCancel(){
    this.router.navigate(['products'])
  }

}
