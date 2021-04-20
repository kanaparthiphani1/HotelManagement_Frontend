import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingService } from '../_services/booking.service';
import { EmployeeService } from '../_services/employee.service';
import { Feedback } from '../_services/Feedback';
import { UserService } from '../_services/user.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  userCount!: number;
  employeeCount!: number;
  bookingCount!: number;
  feeds!:Observable<Feedback[]>;
  PieChart:any =[];
  ratingPerc!:number;
  ratings:any =[];
  type:any="PieChart"
  title = 'Customer Rated above 3 are Satisfied and below 3 are not';
  chartData!:any[];
  columnNames = ['Browser', 'Percentage'];
  width = 550;
      height = 400;

  constructor(private userService:UserService, private employeeService:EmployeeService, private bookingService:BookingService) { }

  ngOnInit(): void {

    this.feeds = this.bookingService.getAllFeeds();

    this.bookingService.getFeedRatings().subscribe(
      data=>{
        console.log(data);

        this.ratingPerc = data;
        console.log(this.ratingPerc);
        this.chartData = [
          ['Satisfied', this.ratingPerc],
          ['Not Satisfied', 100-this.ratingPerc],
       ];

      }
    );


    this.userService.getUserCount().subscribe(
      data=>{
        this.userCount = data;
      }
    );

    this.employeeService.getEmployeeCount().subscribe(
      data=>{
        this.employeeCount = data
      }
    );

    this.bookingService.getBookingCount().subscribe(
      data=>{
        this.bookingCount = data
      }
    );




        console.log(this.chartData)





  }



}
