import { Component, OnInit } from '@angular/core';
import { ServicepokemonsService } from '../servicepokemons.service';
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

  constructor(private servicePokemons: ServicepokemonsService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.servicePokemons.login(this.credentials).subscribe(
      response => {
        console.log('Autenticación Exitosa');
        console.log('Token:', response.token);
        console.log('Nombre de usuario:', response.nombre);
        sessionStorage.setItem("user",response.nombre);
        this.router.navigate(["/user"]);
        this.servicePokemons.handleLogin(response);
      },
      error => {
        this.servicePokemons.handleLoginError(error);
      }
    );
  }
}
