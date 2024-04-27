import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { ServicioUsuariosService } from '../servicio-usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tittle = 'Login';
  mensaje:string="";
  nombre:string="";
  apellido:string="";
  email:string="";
  login=false;

  
  usuarios: Usuario[]=[];


  constructor(private servicios:ServicioUsuariosService){
    
    this.usuarios=this.servicios.usuarios;
  }

  ngOnInit(): void {
  }

  loginuser(){
    this.login=true;
    this.mensaje="Usuario logueado";
   let userlogueado=new Usuario(this.nombre,this.apellido,this.email);
   this.servicios.showmsj(`Nombre del usuario :  ${this.nombre}  email : ${this.email} `);
    this.servicios.agregarusuario(userlogueado);
  }

}
