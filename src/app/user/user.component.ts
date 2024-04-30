import { Component, OnInit } from '@angular/core';
import { ServicepokemonsService } from '../servicepokemons.service';
import { Router, RouterModule } from '@angular/router';
import { Pokemon } from '../pokemon';
import { ServiceusersService } from '../serviceusers.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone:true,
  imports:[RouterModule,FormsModule,CommonModule,HttpClientModule],
  providers:[ServiceusersService,ServicepokemonsService]

})
export class UserComponent implements OnInit {
  

  token: string | null = null;

  userInfo: any;

  caughtPokemons: string[] = [];

  idpokemon:string;

  iduser:number;

  username:string="";

  stringid:string="";

  constructor(private servicepokemons:ServicepokemonsService,private router: Router,private  serviceUser:ServiceusersService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
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




  
  }

  


