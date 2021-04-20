import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = 'http://localhost:8004/api/v2/booking';

  private feedUrl= 'http://localhost:8004/api/v2/feed';

  constructor(private http: HttpClient) { }
  //need to implement
  getBooking(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/${id}`);
  }

  createBooking(booking: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, booking);
  }
//need to implement
  updateBooking(book: Booking): Observable<Object>{
    console.log("HIII")
    console.log(book);

    return this.http.post(`http://localhost:8004/api/v2/booking`, book);
  }
//need to implement
  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBookingList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getBookingCount(){
    return this.http.get<number>(`${this.baseUrl}/count`);
  }

  getAllFeeds(): Observable<any>{
    return this.http.get(`${this.feedUrl}`);
  }

  getFeedsById(bookingId : number){
    return this.http.get(`${this.feedUrl}/bookingId/${bookingId}`);
  }

  getFeedsByuserName(userName : string){
    return this.http.get(`${this.feedUrl}/userName/${userName}`);
  }

  postFeed(feed:any){
    return this.http.post(`${this.feedUrl}`,feed);
  }

  getFeedRatings(){
    return this.http.get<number>(`${this.feedUrl}/ratings`);
  }
}
