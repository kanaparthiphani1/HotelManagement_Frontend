import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { BookingService } from '../_services/booking.service';
import { EmployeeService } from '../_services/employee.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements OnInit {



  constructor() {

   }

  ngOnInit(): void {


    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }


  }

  reloadPage=  function() {

  }
}
