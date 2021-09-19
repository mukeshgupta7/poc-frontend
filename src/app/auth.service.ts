import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/User ';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:8080/users/register";
  private _loginUrl = "http://localhost:8080/users/authenticate";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(id, username, password, type) {
    let user: User = {id: id, name: username, password: password, type: type}
    return this.http.post<any>(this._registerUrl, user, { observe: 'response' })
  }

  loginUser(id,username, password, type) {
    let user: User = {id: id, name: username, password: password, type: type }
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    if (localStorage.getItem('cart') !== null) {
      localStorage.removeItem('cart')
    }
    localStorage.removeItem('username')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  isAdmin(): boolean {
    if(localStorage.getItem('userType') === "ADMIN"){
      return true
    } else {
      return false
    }    
  }

  isEmpty(): boolean {
    if(localStorage.length == 0){
      return true;
    }
    return false; 
  }

}
