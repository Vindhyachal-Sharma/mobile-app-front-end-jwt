import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }


  public registerCustomer(request: any) {
    return this.http.post("http://localhost:8092/customer", request, { responseType: 'json' })
  }

  public addToCart(mobileId: number, customerId: number) {
    return this.http.post("http://localhost:8092/cart/mobile/" + customerId + "/" + mobileId, "", { responseType: 'text' as 'json' })
  }
  getCart(customerId: number): Observable<any> {

    return this.http.get("http://localhost:8092/cart/" + customerId, { responseType: "json" })
  }

  removeMobFromCart(customerId: number, mobileId: number) {
    return this.http.delete("http://localhost:8092/cart/mobile/" + customerId + "/" + mobileId)
  }
  emptyCart(customerId: number) {
    return this.http.delete("http://localhost:8092/cart/delete/" + customerId)
  }


  checkout(request: any, customerId: number) {
    return this.http.put("http://localhost:8092/cart/checkout/" + customerId, request, { responseType: 'text' as 'json' })
  }
  getUserData(customerId: number): Observable<any> {

    return this.http.get("http://localhost:8092/customer/" + customerId, { responseType: "json" })
  }


  updateUserData(customerId: number, data: any): Observable<any> {

    return this.http.put("http://localhost:8092/customer/" + customerId, data, { responseType: "json" })
  }

    public customerDetails(customerId:number): Observable<any> {
    return this.http.get("http://localhost:8092/customer/"+customerId, { responseType: "json" });
  }

  public updateCustomerDetails(request:any){
    return this.http.post("http://localhost:8092/customer",request,{responseType:'json'})
  }

  public deactivateAccount(customerId:any){
    return this.http.put("http://localhost:8092/customer/account/"+customerId, { responseType: 'text' as 'json' })
  }

  public getOrdersListOfCustomer(customerId:number):Observable<any>{
    return this.http.get("http://localhost:8092/customer/order/"+ customerId,{ responseType: 'json'})
  }
  public getOrdersbyOrderId(orderId:number):Observable<any>{
    return this.http.get("http://localhost:8092/order/"+ orderId,{ responseType: 'json'})
  }
  public cancelOrderById(cid:any,oid:number):Observable<any>{
    return this.http.put("http://localhost:8092/customer/order/"+cid+"/"+oid,{ responseType: 'json'})
  }

  

}
