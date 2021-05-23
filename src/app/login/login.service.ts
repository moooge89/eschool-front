import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class LoginService {
  private apiServerUrl = environment.urlBackEnd;

  constructor(private http: HttpClient){}

  public checkLogin(login: Login): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiServerUrl}/student/login`, login);
  }
}