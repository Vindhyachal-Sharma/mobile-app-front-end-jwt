import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/ApiService/api.service';
import { CustomerService } from 'src/app/service/customerService/customer.service';

import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoginComponent]
})
export class HeaderComponent implements OnInit {

  customerId:any
  public totalItem:any

  public searchTerm: string = '';


  constructor(public user: LoginComponent, private apiService: ApiService, private router: Router,public customerService:CustomerService) { }

  ngOnInit() {
    this.user.isLogged = this.user.isLogged
    if(localStorage.getItem('userId')){
      this.getCart()
    }

}
search(event: any) {
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.apiService.search.next(this.searchTerm);
}

    goToProducts(){
      sessionStorage.clear()
      this.router.navigate(['getAllMob']).then(() => {
        window.location.reload();
    })
  }

    getCart() {
    
      this.customerId = localStorage.getItem('userId')
      this.customerService.getCart(this.customerId)
        .subscribe(
          {
            next: (data) => {
              console.log(data);
              this.totalItem = data.quantity
             
  
            },
            error: (error) => {
            }
          });
  }

  //   goToMyProfile(){
  //     this.router.navigate(['']).then(() => {
  //       window.location.reload();
  //   })

  // }


 
}


