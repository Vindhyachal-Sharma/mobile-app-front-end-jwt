import { isNgContainer } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';

import { AdminService } from 'src/app/service/adminService/admin.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[LoginComponent]
})
export class CategoryComponent {
category:Category=new Category();

editComponent:any





isclicked(){
sessionStorage.setItem('editComponent',"true")
window.location.reload()
}



  categoryList:Category[]=[];
  filtercategory:any;
 

  
  loadMsg: String = "";
  delMsg: String = "";
  errorMsg: String = "";
  constructor(private categoryService: AdminService,public user: LoginComponent,private router:Router) { }
  ngOnInit(): void {
    this.editComponent=sessionStorage.getItem('editComponent')
    this.loadAllCategories();
  }

createCategory(){
 
    this.categoryService.createCategory(this.category)
      .subscribe(
        {
          next: (data) => { 
           console.log(data)
           this.loadAllCategories();
           this.loadMsg = "Fetched all category, Success!";
           this.errorMsg = "";
          },
          error: (error) => {
            console.log(error)
            this.errorMsg = error.error;
            this.loadMsg = "";
          }
          
        });

        
      }
    
  


  loadAllCategories() {
    this.categoryService.getAllCategories()
      .subscribe(
        {
          next: (data) => {
            console.log(data);
            this.categoryList=data;
            this.filtercategory = data;
            
          },
          error: (error) => {
            console.log(error);
          }
        });
  }
addMobile(categoryId:any){
  sessionStorage.setItem('categoryId',categoryId)
  this.router.navigate(['addMob'])
}

editCategory(categoryId:any){
 

 
}

getAllMobileFromCategory(categoryId:any){
  sessionStorage.setItem('categoryId',categoryId)
  this.router.navigate(['getAllMob'])
}


  filter(category:string){
    this.filtercategory=this.categoryList
    .filter((a:any)=>{
      if(a.category==category || category==' '){
        return a;
      }
    })

  }
}
