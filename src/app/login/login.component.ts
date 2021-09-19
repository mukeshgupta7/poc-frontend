import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = ''
  password = ''
  type = ''
  id = ''
  constructor(private _auth: AuthService,
              private _router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.id, this.name, this.password, this.type)
    .subscribe(
      res => {

          if(res.role.toUpperCase() === "ADMIN"){
            localStorage.setItem('userType', "ADMIN")
          }
          else{
            localStorage.setItem('userType', "USER")
          }
          
          localStorage.setItem('token', res.jwt)
          localStorage.setItem('username', res.username)
          this._router.navigate(['/shop'])
        
      },
      err => { 
          console.log(err.status) 
          if(err.status == 401 || err.status == 500 || err.status == 403){
            this.toastr.error('Wrong Username or Password !');
          } 
      }
      
    ) 
  }

  navigateToReg() {
    this._router.navigate(['/register'])
  }
  
}
