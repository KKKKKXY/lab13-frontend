import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationServiceService } from '../authentication/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 returnUrl: string;
 isError: boolean;
 home: boolean;
  addressForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required]
  });
  lecturerId: number;
 
  validation_messages = {
    'username': [
      { type: 'required', message: 'username is <strong>required</strong>' },
    ],
    'password': [
      { type: 'required', message: 'the password is <strong>required</strong>' }
    ]
  };
  hide = true;
 
 
  //constructor(private fb: FormBuilder, private router: Router) { }
  constructor(private fb: FormBuilder, private router: Router, private authenService: AuthenticationServiceService, private route: ActivatedRoute) { }
  ngOnInit(): void { 
    //reset login status
    this.authenService.logout();
    this.isError = false;
    //get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if (this.returnUrl === '/') {
      this.home = true;
    } else {
      this.home = false;
    }
    console.log('returnUrl'+ this.returnUrl);
    
  }

  onSubmit() {

    const value = this.addressForm.value;
    this.authenService.login(value.username,value.password)
    .subscribe(
      data => {
        this.isError = false;
        this.router.navigate([this.returnUrl])
      },
      error => {
        this.isError = true;
      }
    );
    console.log(this.addressForm.value);
  } 
}
