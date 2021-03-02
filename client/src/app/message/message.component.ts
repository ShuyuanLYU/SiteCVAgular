import { Component, OnInit } from '@angular/core';
import { Message } from '../model/app.message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public messages: any;

  constructor(private messageService: MessageService) { }


  ngOnInit(): void {
    this.getMessages();
   }

  getMessages(): void{

    this.messageService.getAll()
    .subscribe(
      data => {
        this.messages = data;
      },
      error => {
        console.log(error);
      }
    );
  }



}
