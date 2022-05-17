import { Injectable } from '@angular/core';

import { Login } from '../models/login.interface';
import { Response } from '../models/response.interface';
import { Register } from '../models/register.interface';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  loginByEmail(form:Login):Observable<Response>
  {
    let direccion = this.url + 'login';
    return this.http.post<Response>(direccion, form);
  }

  registerUser(form:Register):Observable<Response>
  {
    let direccion = this.url + 'sign-up';
    return this.http.post<Response>(direccion, form)
  }

}
