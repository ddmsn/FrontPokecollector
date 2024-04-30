import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor(private socket: Socket) { }

  sendMessage(message: string): void {
    this.socket.emit('new-message', message);
  }

  getMessage(): Observable<string> {
    return this.socket.fromEvent<string>('new-message');
  }
}
