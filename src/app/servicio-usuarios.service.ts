import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuariosService {

  usuarios: Usuario[]=[

    new Usuario("leonardo","mendoza","leo@gmail.com"),
    new Usuario("david","mendoza","david@gmail.com"),
    new Usuario("ale","tandazo","tandazo@gmail.com"),
    new Usuario("miguel","torres","torres@gmail.com")
  ];

  agregarusuario(usuario:Usuario){
    this.usuarios.push(usuario);

  }

  constructor() { }

  //creacion del servicio 
  showmsj(mensaje:string){

    alert(mensaje)
  }


}
