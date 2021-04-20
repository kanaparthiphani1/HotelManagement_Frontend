export class MailRequest{

  name!:string;
  to!:string;
  from!:string;
  subject!:string;
  constructor(to:string,from:string,subject:string,name:string){
    this.to= to;
    this.from = from;
    this.subject =subject;
    this.name =name;
  }

  setName(name:string){
    this.name = name;
  }
  setTo(to:string){
    this.to = to;
  }
  setFrom(from:string){
    this.from = from;
  }
  setSubject(subject:string){
    this.subject = subject;
  }
}
