import { Component } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { AdminService } from 'src/app/service/adminService/admin.service';

@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrls: ['./get-all-customer.component.css']
})
export class GetAllCustomerComponent {

  customersList: Customer[] = [];
  

  loadMsg: String = "";
  delMsg: String = "";
  errorMsg: String = "";

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.loadOrdersData()
  }

  loadOrdersData() {

    this.adminService.getAllCustomers()
      .subscribe(
        {
          next: (data) => {
            console.log(data);

           this.customersList=data
            this.loadMsg = "Fetched all Customers, Success!";
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
