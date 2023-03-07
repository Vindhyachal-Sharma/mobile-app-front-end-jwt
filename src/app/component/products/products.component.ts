import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/adminService/admin.service';
import { ApiService } from 'src/app/service/api.service';
import { CustomerService } from 'src/app/service/customerService/customer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  customerId:any;

  public productList:any;
  public filterCategory:any;
  searchKey:string="";
  constructor(private customerService:CustomerService,private apiservice:ApiService,private adminService:AdminService) { }

  ngOnInit(): void {
    this.getAllMobilesApi()

    this.apiservice.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }

  addtocart(mobileId:number){
this.customerId=localStorage.getItem('userId')
 this.customerService.addToCart(mobileId,this.customerId)
    .subscribe(
      {
        next: (data) => {
          console.log(data);      
        },
        error: (error) => { 
          console.log(error) 
        }
      });
  }
  
  getAllMobilesApi(){
   this.adminService.getAllMobiles()
    .subscribe(
      {
        next: (data) => {
          console.log(data);
          this.productList=data;        
        },
        error: (error) => {  
        }
      });
  }


}
