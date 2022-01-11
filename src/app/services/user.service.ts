import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment.prod';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  loginUser(user: User): Observable<any> {
    return this.http.post<any>(`${baseUrl}user/login`, user);
  }

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(`${baseUrl}user/register`, user);
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  hasValidToken() {
    let token: string = localStorage.getItem('token') || '';
    return token != '' ? this.tokenExpired(token) : true;
  }

  tokenExpired(token: string) {
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }
}
