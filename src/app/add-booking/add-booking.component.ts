import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../_services/booking';
import { BookingService } from '../_services/booking.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {


  booking: Booking = new Booking();
  submitted = false;

  constructor(private bookingService: BookingService,
    private router: Router) { }

  ngOnInit() {
  }

  newRoom(): void {
    this.submitted = false;
    this.booking = new Booking();
  }

  save() {
    this.booking.userId = <String>localStorage.getItem('userId');
    this.booking.userName = <string>localStorage.getItem('username');
    this.booking.approvalStatus = 'Pending';
    console.log(this.booking);
    this.bookingService.createBooking(this.booking)
      .subscribe(data => console.log(data), error => console.log(error));
      console.log(this.booking);
    this.booking = new Booking();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    //this.router.navigate(['/room']);
  }

}
