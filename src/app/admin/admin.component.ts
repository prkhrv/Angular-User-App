import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private Auth:AuthService,private router:Router) { }


  logout (){
    // console.log("logout clicked");
    this.Auth.setLoggedIn(false);
    localStorage.removeItem('access-token');
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
