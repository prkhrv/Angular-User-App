import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


   public Users = [];

  constructor(private Auth:AuthService,private router:Router,private getData:DataService) { }


  logout (){
    // console.log("logout clicked");
    this.Auth.setLoggedIn(false);
    localStorage.removeItem('access-token');
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.getData.getUsers().subscribe(users => this.Users = users);
  }

}
