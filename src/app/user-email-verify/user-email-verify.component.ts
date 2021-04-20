import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MailResponse } from '../_services/MailResponse';

@Component({
  selector: 'app-user-email-verify',
  templateUrl: './user-email-verify.component.html',
  styleUrls: ['./user-email-verify.component.css']
})
export class UserEmailVerifyComponent implements OnInit {

  form: any = {
    otp: null
  };
  isLoggedIn = false;
  emailResponse!:MailResponse;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  user:any;
  isOtpFailed=false;

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.emailResponse = JSON.parse(<string>localStorage.getItem("emailResponse"));
    this.user = JSON.parse(<string>localStorage.getItem('user'));
  }

  onSubmit(): void {

    if(this.form.otp === this.emailResponse.otp){
      console.log(this.user);
      this.isOtpFailed = false;
      this.authService.register(this.user.username, this.user.email, this.user.password).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }

      );
      this.onLoginNavigate()
    }
    else{
      this.isOtpFailed = true;
    }

    // if(!this.isSignUpFailed){

    //   this.router.navigate(['login']);
    // }

  }
  onLoginNavigate(){
    if(!this.isSignUpFailed){
    this.router.navigate(['login']);}
  }

}
