import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Login } from 'src/app/model/login';
import { AlertService } from 'src/app/service/alertService/alert.service';
import { LoginService } from 'src/app/service/authService/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private isLoggedIn = new BehaviorSubject<Boolean>(false);
  public isLogged = this.isLoggedIn.asObservable();
  user: Login = new Login();
  msg = '';
  errorMsg = '';

  constructor(
    private loginService: LoginService,
    private router: Router,
    private alertService: AlertService
  ) {
    const uname = localStorage.getItem('userName');
    console.log(uname);
    this.isLoggedIn.next(!!uname);
  }

  onSubmit() {
    console.log('Clicked login Button');
    console.log(this.user);
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
        let header = data.headers.get('Authorization');
        console.log(data.headers);
        localStorage.setItem('TOKEN', header);
        let str = JSON.parse(data.body);
        localStorage.setItem('userId', str['userId']);
        localStorage.setItem('role', str['role']);
        localStorage.setItem('userName', str['userName']);
        this.alertService.apiSuccessMsgReload('Login Successfull', 3000);
        this.goToHome();
      },
      error: (err) => {
        this.alertService.apiFail(err);
      },
    });
  }

  public logout() {
    localStorage.clear();
    this.alertService.apiSuccessMsgReload('Logout Successfull',2000);
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }

  goToHome() {
    if (this.loginService.isAdmin()) {
      this.router.navigate(['adminHome']).then(() => {
        window.location.reload();
      });
    } else {
      this.router.navigate(['home']).then(() => {
        window.location.reload();
      });
    }
  }
  

}
