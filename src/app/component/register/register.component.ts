import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customerService/customer.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customer:Customer =new Customer();
  
   
  constructor(private customerService:CustomerService,private router:Router){}

  register(){
    
    
    this.customerService.registerCustomer(this.customer).subscribe({
      next:(data)=>{
        console.log(data)
        this.router.navigate(['login'])
      },
      error:(err)=>{console.log(err)}
    })
  }

  checkPasswordMatch() {
    const password = document.getElementById("password") as HTMLInputElement;
    const confirmPassword = document.getElementById("confirm-password") as HTMLInputElement;
  
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords do not match");
    } else {
      confirmPassword.setCustomValidity("");
    }
  }
  
}
