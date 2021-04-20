import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MailRequest } from './MailRequest';
import { MailResponse } from './MailResponse';

const API_URL = 'http://localhost:8001/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getUserCount(){
    return this.http.get<number>(API_URL+'users/count');
  }

  sendOtpMail(mailBody: MailRequest): Observable<any>{
    return this.http.post(API_URL+'sendingEmail',mailBody);
  }

}
