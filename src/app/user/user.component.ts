import { Component, OnInit } from '@angular/core';
import { ServicepokemonsService } from '../servicepokemons.service';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  token: string | null = null;

  userInfo: any;

  caughtPokemons: string[] = [];

  msj:string="";

  constructor(private servicepokemons:ServicepokemonsService,private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userInfo = this.servicepokemons.getUserInfo();
    this.msj=this.userInfo.nombreUsuario;
    this.showpokes(this.msj)
  }

  showpokes(nombre:string){
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.userInfo = this.servicepokemons.getUserInfo();
      if (this.userInfo) {
        this.servicepokemons.obteneruserPokemons(nombre).subscribe(
          (data: string[]) => {
            this.caughtPokemons = data;
            console.log("pokes: "+ this.caughtPokemons)
          },
          (error) => {
            console.log("No se pudo obtener la lista de pokemons:", error);
          }
        );
      }
    } else {
      console.error("Token no encontrado en el almacenamiento local");
      this.router.navigate(['/login']);
    }
  }

  logout(){
   this.servicepokemons.logout();
   this.router.navigate(["/login"]);
  }

  



}
