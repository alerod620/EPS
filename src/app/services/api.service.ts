import { Injectable } from '@angular/core';

import { Login } from '../models/login.interface'
import { responseLogin } from '../models/responseLogin.interface';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  loginByEmail(form:Login):Observable<responseLogin>
  {
    let direccion = this.url + 'login';
    return this.http.post<responseLogin>(direccion, form);
  }

}
