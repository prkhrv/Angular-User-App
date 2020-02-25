import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router: Router) { }


  private loggedInStatus = false;

  setLoggedIn(value){
    this.loggedInStatus = value;
  }

  get isLoggedIn(){
    return this.loggedInStatus;
  }

  loginUser(username,password) {
    //login  a user
    const localUrl = 'http://127.0.0.1:3000/api/login';
    this.http.post(localUrl,{"user_name": username,"password":password}).subscribe((res)=>{
      console.log("POST call successful value returned in body",res);
      if(res['auth']){
        this.setLoggedIn(true);
        localStorage.setItem('access-token',res['token']);
        this.router.navigate(['admin']);
      }else{
        window.alert(res['message']);
      }
    });
  }

  //Signup a User
  signupUser(username,password,email){
    const localUrl = 'http://127.0.0.1:3000/api/signup';
    this.http.post(localUrl,{
      "user_name":username,
      "email":email,
      "password":password
    }).subscribe((res)=>{
      console.log(res);
      if(res['created']){
        this.router.navigate(['']);
      }
    });
  }

  getToken(){
    return localStorage.getItem('access-token');
  }
}
