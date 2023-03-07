import { HtmlParser } from '@angular/compiler';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Mobile } from 'src/app/model/mobile';

import { AdminService } from 'src/app/service/adminService/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-mobiles',
  templateUrl: './get-all-mobiles.component.html',
  styleUrls: ['./get-all-mobiles.component.css']
})
export class GetAllMobilesComponent {

 isSessionStorageEmpty: boolean=true;  
 
  mobileList: Mobile[] = [];
  categoryId:any;


  loadMsg: String = "";
  delMsg: String = "";
  errorMsg: String = "";
  

  constructor(private adminService: AdminService,private router:Router) { }
  ngOnInit(): void {
    this.isSessionStorageEmpty = sessionStorage.length !== 0;
    this.categoryId=sessionStorage.getItem('categoryId')
    
    this.getAllMobilesApi()
  }


    


  getToUpdateMob(mobileId:any){
    sessionStorage.setItem('mobileId',mobileId)
    this.router.navigate(['updateMob'])
  }
  getAllMobilesApi(){
  
    console.log(this.categoryId)
    if(!(this.categoryId=== null || this.categoryId === undefined)){
    this.adminService.getMobilesByCategoryId(this.categoryId)
     .subscribe(
       {
         next: (data) => {
           console.log(data);
           this.mobileList=data;        
         },
         error: (error) => {  
          console.log(error)
         }
       });
      }else{
        this.adminService.getAllMobiles()
    .subscribe(
      {
        next: (data) => {
          console.log(data);
          this.mobileList=data;        
        },
        error: (error) => {  
        }
      });
      }

      }

  removeMobile(mobileId:any){
      Swal.fire({
        title:'Are You Sure Do you want to remove mobile from this Category?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, remove it!',
        cancelButtonText: 'No, keep it'
      }).then((result)=>{
        if(result.isConfirmed){
          this.categoryId=sessionStorage.getItem('categoryId')
          this.adminService.removeMobilefromCategoryById(this.categoryId,mobileId)
          .subscribe(
            {
              next: (data) => {
                console.log(data);
                     
              },
              error: (error) => {  
                console.log(error);
              }
            });
            window.location.reload()
        }
      })
    }
   
}


