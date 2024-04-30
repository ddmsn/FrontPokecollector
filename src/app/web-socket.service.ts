import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyWebSocketService {

  constructor(private webSocketService: WebSocketService) {}

  connect() {
    this.webSocketService.connect('ws://localhost:8081');
  }

  sendMessage(message: any) {
    this.webSocketService.send(message);
  }

  getMessageObservable() {
    return this.webSocketService.getDataStream();
  }
}
