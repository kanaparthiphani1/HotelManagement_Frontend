import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { MailRequest } from '../_services/MailRequest';
import { MailResponse } from '../_services/MailResponse';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  emailResponse!:MailResponse;
  mailRequest!: MailRequest;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;
    this.mailRequest = new MailRequest(email,"kanaparthiphani0@gmail.com","Welcome to YaHvi",username);

    console.log(this.mailRequest);


    this.userService.sendOtpMail(this.mailRequest).subscribe(
      data=>{
        console.log("HYYYY");
        console.log(data);


        this.emailResponse = data;
        localStorage.setItem("emailResponse",JSON.stringify(this.emailResponse));
        localStorage.setItem('user',JSON.stringify({"username":username,"email":email,"password":password}));
         this.onVerifyNavigate();
      }

    );




  }

  onVerifyNavigate(){
  if(this.emailResponse.status === true){
    this.router.navigate(['emailverify']);
  }
}
}
