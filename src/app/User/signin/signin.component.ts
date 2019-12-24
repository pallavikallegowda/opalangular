import { Component, OnInit } from '@angular/core';
import { Login } from '../../interfaces/login';
import { AuthService } from '../../article/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';    

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,  
    private router : Router,  
    private authService : AuthService) { }
    model: Login = { userid: "admin", password: "admin@123" }  
    loginForm: FormGroup;  
    message: string;  
    returnUrl: string; 
    
  ngOnInit() {
    this.loginForm = this.formBuilder.group({  
      userid: ['', Validators.required],  
      password: ['', Validators.required]  
   });  
this.returnUrl = '/';  
this.authService.logout();  
  }
  get f() { return this.loginForm.controls; }  
  login() {  
  
    // stop here if form is invalid  
    if (this.loginForm.invalid) {  
       return;  
    }  
    else {  
       if (this.f.userid.value == this.model.userid && this.f.password.value == this.model.password) {  
          console.log("Login successful");  
          //this.authService.authLogin(this.model);  
          localStorage.setItem('isLoggedIn', "true");  
          localStorage.setItem('token', this.f.userid.value);  
          this.router.navigate([this.returnUrl]);  
       }  
    else {  
       this.message = "Please check your userid and password";  
       }  
      }  
    }  
}
