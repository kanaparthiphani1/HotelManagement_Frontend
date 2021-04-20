import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

  constructor(private router:Router) { }

  username!:string;
  ngOnInit(): void {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }
    this.username = <string>localStorage.getItem('username');
  }

  routeToMyBookings(){
    this.router.navigate(['userBookings']);
  }

  routeToBookNow(){
    this.router.navigate(['addBooking']);
  }

}
