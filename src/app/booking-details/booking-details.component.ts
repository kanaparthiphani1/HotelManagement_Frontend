import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { Booking } from '../_services/booking';
import { BookingService } from '../_services/booking.service';
import { Feedback } from '../_services/Feedback';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  bookings!: Observable<Booking[]>;
  userName!: string;
  feedback!:Feedback;
  rating!:number;
  comment!:string;
  bookingId!:number;


  constructor(private bookingService: BookingService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.userName = <string>localStorage.getItem('username');

    }

  reloadData() {
    console.log("HIII");

    this.bookings = this.bookingService.getBooking(<string>localStorage.getItem('userId'));



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

  colorpicker(status: any){

    console.log(status);

    if(status === 'Approved'){
      return 'background-color: rgb(134, 223, 134,0.7)';
    } else if(status === 'Pending'){
      return 'background-color: rgb(226, 195, 136,0.7);';
    }
    else{
      return 'background-color: rgb(206, 89, 89,0.7)';
    }

  }

  onChangerating($event:any){
    this.rating = $event.target.value;

  }

  OnSubmitFeed(){
    this.feedback = new Feedback(this.bookingId,this.userName,this.rating,this.comment,new Date().toDateString());
    console.log(this.feedback);

    this.bookingService.postFeed(this.feedback).subscribe(
      data=>{
        console.log("posted feed");

      }
    )
  }


}
