import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServicepokemonsService } from "../servicepokemons.service";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  isLoggedIn: boolean = false; // Variable para controlar el estado de inicio de sesión
  links: string[] = []; // Arreglo de enlaces

  constructor(private router: Router, private servicePokemonsService: ServicepokemonsService) {}

  navigate(link: string) {
    this.router.navigate(['/' + link]);
  }

  ngOnInit() {
    // Suscribirse al cambio de estado de autenticación
    this.servicePokemonsService.getAuthenticationState().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.updateLinks();
    });
  }

  logout() {
    this.servicePokemonsService.logout();
    this.router.navigate(['/inicio']);
  }

  // Método para actualizar los enlaces dependiendo del estado de inicio de sesión
  updateLinks() {
    if (this.isLoggedIn) {
      this.links = ['inicio', 'pokedex','user','pokemon']; // Menús cuando el usuario está conectado
    } else {
      this.links = ['inicio', 'login','register']; // Menús cuando el usuario no está conectado
    }
  }
}
