import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Authentication/authentication.service';
import { TokenValues } from '../token-value';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  
  constructor(private router: Router, private authService: AuthenticationService) { }
  LoginError: boolean = false;
  ngOnInit(): void {
  }

  token: TokenValues;
  submit(username, password) {
    this.authService.validateUser(username, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.router.navigate(['/tasks']);
    },
      (error: HttpErrorResponse) => {
        this.LoginError = true;
      })
      
    }
   Login(){
     this.router.navigate(["/tasks"]);
   }

}