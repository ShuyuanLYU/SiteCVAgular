import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/app.message';
import { Observable } from 'rxjs';

//const baseUrl = 'http://139.162.199.44:3080/api';
const baseUrl = 'http://127.0.0.1:3080/api';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get(`${baseUrl}/messages`);
  }

  addNewMessage(title: string, content: string): any {
    return this.http.post(`${baseUrl}/newMessage`, {title, message: content}, {responseType: 'text'});;
  }

}
