import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mobile } from 'src/app/model/mobile';

import { AdminService } from 'src/app/service/adminService/admin.service';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-add-mobile-to-category',
  templateUrl: './add-mobile-to-category.component.html',
  styleUrls: ['./add-mobile-to-category.component.css'],
  providers:[LoginComponent]
})
export class AddMobileToCategoryComponent implements OnInit {
  mobile :Mobile=new Mobile()
   
   categoryId:any
  constructor(private router:Router,public user:LoginComponent,private adminService:AdminService){}
  ngOnInit(): void {

  }

  mobileAdded(){
    this.categoryId=sessionStorage.getItem('categoryId')
    this.adminService.addmobileToCategoryByCategoryId(this.mobile,this.categoryId)
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.router.navigate(['/category']).then(() => {
              window.location.reload();
            })
          
          },
          error: (error) => {
            console.log(error);
          }
        });
  }
  

  
  

}
