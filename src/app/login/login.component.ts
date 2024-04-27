import { Component, OnInit } from '@angular/core';
import { ServicepokemonsService } from '../servicepokemons.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    nombre: '',
    contrasena: ''
  };

  redireccion:boolean;

  constructor(private servicioPokemons:ServicepokemonsService,private router: Router) { }

  ngOnInit(): void {
  }
  login(): void {
    this.servicioPokemons.login(this.credentials).subscribe(
      response => {
        console.log('Autenticación Exitoso');
        console.log('Token:', response.token);
        console.log('Nombre de usuario:', response.nombre);
        this.redireccion=true;
        if(this.redireccion===true){
          this.router.navigate(["/user"]);
          }
          this.servicioPokemons.setAuthToken(response.token);
      },
      error => {
        this.redireccion=false;
        console.error('Error en la autenticación:', error);

      }
    );
  }

  
}