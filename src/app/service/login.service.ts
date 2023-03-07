import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public isAdmin():boolean {
    if (localStorage.getItem('role') === 'Admin'){
      return true;
    }else {
      return false;
    }
  } 
  public isLogin():Boolean {
    if (localStorage.getItem('username')!= null) {
      return true;
    }else {
      return false;
    }
  }

  public login(request: any) {
    return this.http.post("http://localhost:8092/login", request, { responseType: 'text' as 'json' })
  }

 
}



