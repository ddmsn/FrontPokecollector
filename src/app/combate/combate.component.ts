import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketService } from "../web-socket.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-combate',
  templateUrl: './combate.component.html',
  styleUrls: ['./combate.component.css']
})
export class CombateComponent implements OnInit, OnDestroy {
  messages: string[] = [];
  messageSubscription: Subscription;
  newMessage: string = '';

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.messageSubscription = this.webSocketService.getMessageObservable().subscribe(message => {
      // Manejar el mensaje recibido del WebSocket
      this.messages.push(message);
    });
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }

  sendMessage(): void {
    console.log(this.newMessage);
    if (this.newMessage.trim() !== '') {
      this.webSocketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
