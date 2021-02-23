import { Component, OnInit } from '@angular/core';
import { Message } from '../app.message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  /* message: Message = {
    _id: 123,
    title: 'faut msg',
    message: 'yolo',
    creatTime: new Date(),
    editTime: new Date(),
    timeDiff: 'il y a yolo',
    like: 0
  }; */
  public messages: any;

  constructor(private messageService: MessageService) { }
  newTitle = '';
  newContent = '';

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

  getNewTitle(event): void{
    this.newTitle = event.target.value;
  }
  getNewContent(event): void{
    this.newContent = event.target.value;
  }
  sendNewMsg(): void{
    this.messageService.addNewMessage(this.newTitle, this.newContent)
    .subscribe(
      ret => {
        this.ngOnInit();
      }, error => {
        console.log(error);
      }
    );
  }

}
