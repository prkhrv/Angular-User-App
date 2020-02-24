import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private Auth:AuthService) { }

  ngOnInit(): void {
  }

  signupUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    const email = target.querySelector('#email').value;
    console.log(username,password,email);
    this.Auth.signupUser(username,password,email);
  }

}
