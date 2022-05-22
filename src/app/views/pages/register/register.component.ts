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

  emailPatter: any = /^[0-9]{13,14}@ingenieria\.usac\.edu\.gt$/;

  registerForm = new FormGroup({
    correo:new FormControl('',[Validators.required,Validators.pattern(this.emailPatter)]),
    password:new FormControl('',[Validators.required, Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required, Validators.minLength(8)]),
    nombre:new FormControl('',Validators.required),
    apellido:new FormControl('',Validators.required)
  });

  constructor(private api:ApiService, private router: Router) { }

  errorStatus: boolean = false;
  errorMessage: any = "";

  secondPassword: string = "";

  samePassword: boolean = true;

  ngOnInit()
  {

  }

  validateForm = (_form: FormGroup): boolean =>
  {
    if(_form.valid)
    {
      if(_form.value.password === _form.value.confirmPassword)
      {
        return true;
      }
    }
    return false;
  }

  passwordMatch = (_form:FormGroup): boolean =>
  {
    if(_form.controls['password'].touched && _form.controls['confirmPassword'].touched)
    {
      if(_form.value.password === _form.value.confirmPassword)
      {
        return true;
      }
    }
    else
    {
      return false;
    }
    return true;
  }

  Register(form:Register)
  {

    if(this.registerForm.valid)
    {
      if(form.password === form.confirmPassword)
      {
        this.samePassword = true;
        console.log('Valido');
        console.log(form);

        /*
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
        */
      }
      else
      {
        this.samePassword = false;
        console.log('Las contraseñas no coiciden');
      }
    }
    else{
      console.log('No valido');
    }

    
  }

}
