import { Component, OnInit } from '@angular/core';
import { ServicepokemonsService } from '../servicepokemons.service';
import { Router } from '@angular/router';
import { ServiceusersService } from '../serviceusers.service';
import {Equipos} from "../equipos";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']

})
export class UserComponent implements OnInit {

  token: string | null = null;

  userInfo: any;

  caughtPokemons: string[] = [];

  iduser:number;

  username:string="";

  stringid:string="";

  equipoCrear:0;

  equipos:Equipos[];

  constructor(private servicepokemons:ServicepokemonsService,private router: Router,private  serviceUser:ServiceusersService) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    this.userInfo = this.servicepokemons.getUserInfo();
    this.username=this.userInfo.nombreUsuario;
    this.showpokes(this.username)
  }

  showpokes(nombre:string){
      if (this.userInfo) {
        this.servicepokemons.obteneruserPokemons(nombre).subscribe(
          (data: string[]) => {
            this.caughtPokemons = data;
          },
          (error) => {
            console.log("No se pudo obtener la lista de pokemons:", error);
          }
        );
      }
    }

    navigatepokemon(){
      this.router.navigate(["/pokemon"]);
    }

  logout(){
   this.serviceUser.logout();
   this.router.navigate(["/login"]);
  }

  finduserid(){
    this.serviceUser.findUserIdByNombre(this.userInfo.nombreUsuario).subscribe(
      (userId)=>{
        this.iduser=userId;
        console.log(this.iduser)
      })
  }

  deletepokemon(idpokemondelete:string){
    this.servicepokemons.findUserIdByNombre(this.userInfo.nombreUsuario).subscribe(
      (userId)=>{
        this.iduser=userId;
        this.stringid=this.iduser.toString();
        this.serviceUser.deletepokemon(idpokemondelete,this.stringid).subscribe(
        ()=>{
          this.showpokes(this.username);
        }
      );
      })
  }

  addPokeToEquipo(poke: string, num: any) {
    let img = document.createElement("img")
    img.src = "/assets/gifs/"+poke+".gif";
    img.loading="lazy";
    document.getElementById("equipoCrear").appendChild(img);
    this.equipoCrear++;
  }
  guardarEquipo() {
    let equipo = new Equipos();
    equipo.idUser = this.iduser;
    this.serviceUser.guardarTeam(equipo).subscribe();
  }

  crearEquipo() {

  }
}
