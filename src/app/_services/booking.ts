export class Booking {
  id!: number;
  HotelId!: number;
  roomId!: number;
  userName!:string;
  userId!:String;
  checkin!: Date;
  checkout!: Date;
  numOfGuests!: number;
  finalPrice!:number;
  approvalStatus!: string;
}
