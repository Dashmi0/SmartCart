import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://127.0.0.1:8000/users/";

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(this.apiUrl + "register", user);
  }

  login(user: any) {
    return this.http.post(this.apiUrl + "login", user);
  }

}