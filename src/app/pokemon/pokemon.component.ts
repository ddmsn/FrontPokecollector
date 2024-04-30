import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ServicepokemonsService } from '../servicepokemons.service';
import { ServiceusersService } from '../serviceusers.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  standalone:true,
  imports:[RouterModule,FormsModule,CommonModule,HttpClientModule],
  providers:[ServiceusersService,ServicepokemonsService]
})
export class PokemonComponent implements OnInit {

  user_poke_info={
    pokemonId:'',
    userPokemonId:''
  }

  token: string | null = null;

  userinfo:any;

  id:string;

  user=localStorage.getItem("token");

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private router:Router,private serviciosPokemon:ServicepokemonsService, private serviceUser:ServiceusersService) {
   }

  ngOnInit(): void {
    this.token=localStorage.getItem("token");
    this.userinfo=this.serviceUser.getUserInfo();
    this.findid(this.userinfo.nombreUsuario);
  }

  findid(nombre:string):void{
    if(this.userinfo){
        this.serviceUser.findUserIdByNombre(nombre).subscribe(
          userId => {
           this.id=userId.toString();
          }
        );
 
    }
  }
  addPokemon(): void {
    this.user_poke_info.userPokemonId = this.id;
    this.serviciosPokemon.addpokemon(this.user_poke_info).subscribe(
      (response) => {
        this.successMessage="Pokemon añadido exitosamente";
        this.errorMessage="";
    },
    (error) => {
        this.errorMessage="Error al añadir el pokemon";
        this,this.successMessage="";
    }

    );

  }

  navigateuser(){
    this.router.navigate(["/user"]);
  }

}

  

