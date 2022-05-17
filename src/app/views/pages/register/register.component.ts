import { Component, OnInit } from '@angular/core';

import{FormGroup, FormControl, Validators} from '@angular/forms';

import { ApiService } from '../../../services/api.service';
import { Register } from '../../../models/register.interface'
import { Response } from '../../../models/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm = new FormGroup({
    correo:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    nombre:new FormControl('',Validators.required),
    apellido:new FormControl('',Validators.required)
  });

  constructor(private api:ApiService, private router: Router) { }

  errorStatus: boolean = false;
  errorMessage: any = "";

  ngOnInit()
  {

  }

  Register(form:Register)
  {
    console.log(form);
    this.api.registerUser(form).subscribe(data =>{
      let dataResponse: Response = data;
      console.log(dataResponse);
      if(dataResponse.status = "200")
      {
        //localStorage.setItem("Token", dataResponse.result);
        this.router.navigate(['login']);
      }
      else
      {
        this.errorStatus = true;
        this.errorMessage = dataResponse.result.error_msg;
      }
    });
  }

}
