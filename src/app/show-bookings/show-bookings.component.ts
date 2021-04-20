import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from '../_services/booking';
import { BookingService } from '../_services/booking.service';

@Component({
  selector: 'app-show-bookings',
  templateUrl: './show-bookings.component.html',
  styleUrls: ['./show-bookings.component.css']
})
export class ShowBookingsComponent implements OnInit {

  bookings!: Observable<Booking[]>;
  userName!: String;

  constructor(private bookingService: BookingService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.userName = <string>localStorage.getItem('username');
    }

  reloadData() {
    console.log("HIII");

    this.bookings = this.bookingService.getBookingList();
  }

  deleteRoom(id: number) {
    this.bookingService.deleteBooking(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  roomDetails(id: number){
    this.router.navigate(['detailsRoom', id]);
  }

  updateRoom(id: number){
    this.router.navigate(['updateRoom', id]);
  }
  approve(booking:Booking){

    booking.approvalStatus = "Approved";

    this.bookingService.updateBooking(booking)
    .subscribe(data => console.log(data), error => console.log(error));;


  }
  reject(book:Booking){
    book.approvalStatus = "Rejected";
    console.log(book);
    this.bookingService.createBooking(book);

  }
}
