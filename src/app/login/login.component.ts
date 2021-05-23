import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService){}

  ngOnInit(): void {
  }

  public loginCheck(loginForm: NgForm): void{
    this.loginService.checkLogin(loginForm.value).subscribe(
      (response: boolean) => {
        if (response === true){
          window.location.href='http://localhost:4200/main';
        }
        else{
          window.location.href='http://localhost:4200';
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
