import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = ''
  password = ''
  type = ''
  id = ''
  constructor(private _auth: AuthService,
              private _router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  registerUser() {
    this._auth.registerUser(this.id, this.name, this.password, this.type)
    .subscribe(
      res => {
        //localStorage.setItem('token', res.token)
        if(res.status == 200){
          this.toastr.success('User registered successfully !');
        }
        this._router.navigate(['/login'])
      },
      err => {
        console.log(err)
        this.toastr.error('Username already taken !');
      }
    )
  }

}

