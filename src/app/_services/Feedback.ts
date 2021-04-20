export class Feedback {
  id!: number;
  bookingId!: number;
  userName!:string;
  rating!: number;
  comments!:string;
  feedDate!:string;

  constructor(bookingId:number,userName:string,rating:number,comments:string,feedDate:string){
    this.bookingId = bookingId;
    this.userName = userName;
    this.rating = rating;
    this.comments = comments;
    this.feedDate = feedDate;
  }
}
