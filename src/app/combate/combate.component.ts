import { Component, OnInit } from '@angular/core';
import { ChatService } from "../chat.service";

@Component({
  selector: 'app-combate',
  templateUrl: './combate.component.html',
  styleUrls: ['./combate.component.css']
})
export class CombateComponent implements OnInit {
  serverMessage: string;
  message: string;
  messages: { user: string; message: string; }[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getMessages().subscribe((data: { user: string; message: string; }) => {
      // Agregamos un nuevo objeto con el mensaje al arreglo de mensajes
      this.messages.push({ user: data.user, message: data.message });
    });
  }

  sendMessage() {
    // Enviamos el mensaje y el nombre de usuario actual
    this.chatService.sendMessage(this.message, sessionStorage.getItem("user"));
    this.message = ''; // Limpiamos el campo de entrada después de enviar el mensaje
  }

  sendServerMessage() {
    this.chatService.sendServerMessage(this.serverMessage,"Servidor");
  }
}
