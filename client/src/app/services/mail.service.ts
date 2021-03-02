import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mail } from '../model/app.mail';

const baseUrl = 'http://127.0.0.1:3080/api/sendMail';
@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  sendMail(mail: Mail): any {
    console.log(mail);

    return this.http.post(baseUrl, mail, {responseType: 'text'});
  }
}
