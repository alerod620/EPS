import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';

import { ApiService } from '../../../services/api.service';
import { Login } from '../../../models/login.interface'
import { Response } from '../../../models/response.interface';
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
    this.api.loginByEmail(form).subscribe(data =>{
      let dataResponse: Response = data;
      console.log(dataResponse);
      if(dataResponse.status = "200")
      {
        //localStorage.setItem("Token", dataResponse.result);
        this.router.navigate(['inicio']);
      }
      else
      {
        this.errorStatus = true;
        this.errorMessage = dataResponse.result.error_msg;
      }
    });
  }

}
