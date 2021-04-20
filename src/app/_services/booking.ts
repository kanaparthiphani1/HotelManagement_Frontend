export class Booking {
  id!: number;
  HotelId!: number;
  roomId!: number;
  userName!:string;
  feedGiven!:boolean;
  userId!:String;
  checkin!: Date;
  checkout!: Date;
  numOfGuests!: number;
  finalPrice!:number;
  approvalStatus!: string;
}
