import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  newTitle = '';
  newContent = '';

  constructor(private messageService: MessageService) {
   }

  ngOnInit(): void {
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
