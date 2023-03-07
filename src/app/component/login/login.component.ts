import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private isLoggedIn = new BehaviorSubject<Boolean>(false);
  public isLogged = this.isLoggedIn.asObservable();
  user: Login = new Login();
  msg = ""
  errorMsg = ""

  constructor(private loginService: LoginService, private router: Router) {
    const uname = localStorage.getItem('userName');
    console.log(uname)
    this.isLoggedIn.next(!!uname);
  }

  onSubmit() {
    console.log("Clicked login Button")
    console.log(this.user)
  }
  public isAdmin() {
    if (localStorage.getItem('role') === 'Admin') {
      return true;
    } else {
      return false;
    }
  }


  public login() {
    this.loginService.login(this.user).subscribe({
      next: (data: any) => {
        this.msg = "You have logged in"
        let str = JSON.parse(data);
        this.errorMsg = "";
        localStorage.setItem('userId', str["userId"])
        localStorage.setItem('role', str["role"])
        localStorage.setItem('userName', str["userName"])
        console.log(data)
        this.goToHome()
      },
      error: (err) => { console.log(err) }
    })
  }

  public logout() {
    localStorage.clear()
    this.router.navigate(['products']).then(() => {
      window.location.reload();

    });
  }


  
  goToHome() {
    if (this.loginService.isAdmin()) {
      this.router.navigate(['adminHome']).then(() => {
        window.location.reload();
      })
    } else {
      this.router.navigate(['products']).then(() => {
        window.location.reload();
      })
    }
  }

}




