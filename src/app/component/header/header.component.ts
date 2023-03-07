import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoginComponent]
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;

  public searchTerm: string = '';


  constructor(public user: LoginComponent, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.user.isLogged = this.user.isLogged
}
search(event: any) {
  this.searchTerm = (event.target as HTMLInputElement).value;
  console.log(this.searchTerm);
  this.apiService.search.next(this.searchTerm);
}

    goToProducts(){
      sessionStorage.clear()
      this.router.navigate(['getAllMob']).then(() => {
        window.location.reload();
    })
  }

  //   goToMyProfile(){
  //     this.router.navigate(['']).then(() => {
  //       window.location.reload();
  //   })

  // }


 
}


