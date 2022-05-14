import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';

import { ApiService } from '../../../services/api.service';
import { Login } from '../../../models/login.interface'
import { responseLogin } from 'src/app/models/responseLogin.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    correo:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

 
  constructor(private api:ApiService, private router: Router) { }

  errorStatus: boolean = false;
  errorMessage: any = "";

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('Token'))
    {
      this.router.navigate(['inicio'])
    }
  }

  onLogin(form:Login) {
    console.log(form);
    this.router.navigate(['inicio']);
    /*
    this.api.loginByEmail(form).subscribe(data =>{
      let dataResponse: responseLogin = data;
      if(dataResponse.status = "ok")
      {
        localStorage.setItem("Token", dataResponse.result);
        this.router.navigate(['inicio']);
      }
      else
      {
        this.errorStatus = true;
        this.errorMessage = dataResponse.resutlt.error_msg;
      }
    });*/
  }

}
