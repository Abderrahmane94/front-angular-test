import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:8080/api/v1/authenticate';
const REGISTER_API = 'http://localhost:8080/api/v1/register';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login (username: string, password: string) : Observable<any> {
      return this.http.post(AUTH_API, {
        username,
        password
      }, httpOptions);
  }
  register (username: string, name: string, password: string) : Observable<any> {
    return this.http.post(REGISTER_API,{
      name,
      username,
      password
    },httpOptions);
  }

}
