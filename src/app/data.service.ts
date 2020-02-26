import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './admin/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }



  getUsers(): Observable<Users[]>{
    const localUrl = "http://127.0.0.1:3000/api/view";
    return this.http.get<Users[]>(localUrl);
  }
}
