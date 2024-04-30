import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
  selector: 'app-combate',
  templateUrl: './combate.component.html',
  styleUrls: ['./combate.component.css']
})
export class CombateComponent implements OnInit{
  message: string;
  messages: { user: string; message: string; }[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getMessages().subscribe((data: { user: string; message: string; }) => {
      this.messages.push(data);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message,sessionStorage.getItem("user"));
    this.message = '';
  }
}
