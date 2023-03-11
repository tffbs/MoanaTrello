import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../shared/models/LoginResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) { }
  login(email: string, password: string): boolean {
    this.httpClient
      .post<LoginResponse>(
        'http://localhost:5078/api/User/signin',{
          email: email,
          password: password
        })
      .subscribe((response) => {
        if(response === undefined || response === null){
          return false
        }

        localStorage.setItem('bearerToken',response?.token);
        localStorage.setItem('userId', response?.userId);
        return true;
    });
    return false;
  }
  isLoggedIn(): boolean{
    return !!localStorage.getItem('bearerToken');
  }
}
