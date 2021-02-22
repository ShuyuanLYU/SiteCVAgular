import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../app.message';

const baseUrl = 'http://localhost:3080/api/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get(baseUrl);
  }
}
