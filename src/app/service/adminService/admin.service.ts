import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


  public registerNewAdmin(request: any) {
    return this.http.post("http://localhost:8092/admin/register", request, { responseType: 'json' })
  }

  public updateAdminDetails(adminId: number, request: any) {
    return this.http.put("http://localhost:8092/admin/" + adminId, request, { responseType: 'json' })
  }

  public createCategory(request: any) {
    return this.http.post("http://localhost:8092/admin/category", request, { responseType: 'text' as 'json' })
  }

  public updateCategory(request: any) {
    return this.http.post("http://localhost:8092/admin/category/name", request, { responseType: 'text' as 'json' })
  }

  public addmobileToCategoryByCategoryId(request: any, categoryId: number) {
    return this.http.post("http://localhost:8092/admin/mobile/" + categoryId, request, { responseType: 'text' as 'json' })
  }

  public updateMobileDetails(mobileId: number, request: any) {
    return this.http.put("http://localhost:8092/admin/mobile/" + mobileId, request, { responseType: 'text' })
  }

  public removeMobilefromCategoryById(categoryId:number,mobileId: number) {
    return this.http.delete("http://localhost:8092/admin/mobiles/" +categoryId+"/"+ mobileId)
  }
  public removeMobile(mobileId: number) {
    return this.http.delete("http://localhost:8092/admin/mobile/"+ mobileId)
  }

  public getAllCategories(): Observable<any> {

    return this.http.get("http://localhost:8092/admin/categories", { responseType: "json" })
  }

  public getAllCustomers(): Observable<any> {
    return this.http.get("http://localhost:8092/admin/customers", { responseType: "json" });
  }

  public getAllMobiles(): Observable<any> {
    return this.http.get("http://localhost:8092/admin/mobiles")
  }

  public getAllPayments(): Observable<any> {
    return this.http.get("http://localhost:8092/admin/mobiles")
  }

  public getMobileDetails(mobileId:any): Observable<any> {
    return this.http.get("http://localhost:8092/admin/mobiles/"+mobileId)
  }


  public loadAllOrders(): Observable<any> {
    return this.http.get("http://localhost:8092/admin/customers", { responseType: "json" });
  }

  // public getCustomerByUsername(username: String): Observable<any> {
  //   return this.http.get("http://localhost:8092/admin/username/" + username, { responseType: "json" });
  // }

  // public getCustomerByMobileNumber(mobNo: String): Observable<any> {
  //   return this.http.get("http://localhost:8092/admin/mobNo/" + mobNo, { responseType: "json" });
  // }

  // public getCustomerByEmail(emailId: String): Observable<any> {
  //   return this.http.get("http://localhost:8092/admin/customer/" + emailId, { responseType: "json" });
  // }

  public getMobilesByCategoryId(categoryId:number):Observable<any>{
    return this.http.get("http://localhost:8092/admin/mobile/"+categoryId)
  }

  public getAllOrders(): Observable<any> {
    return this.http.get("http://localhost:8092/admin/orders")
  }













}