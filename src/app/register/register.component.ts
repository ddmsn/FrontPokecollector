import { Component, OnInit } from '@angular/core';
import { ServicepokemonsService } from '../servicepokemons.service';
import { register_user } from '../user_register';
import { Observable } from 'rxjs';
import { ServiceusersService } from '../serviceusers.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone:true,
  imports:[RouterModule,FormsModule,CommonModule,HttpClientModule],
  providers:[ServiceusersService,ServicepokemonsService]})
export class RegisterComponent implements OnInit {

  registroexito:boolean|null=null;

  userData:register_user = {
    nombre: '',
    email: '',
    contrasena:''
  };

  numerorandom:number;
  
  user_register:register_user;

  constructor(private userService:ServiceusersService) { }

  ngOnInit(): void {
    this.random();
  }
  registrarUsuarioPokemon() {
    this.userService.guardarUserPokemon(this.userData).subscribe(
      response => {
        console.log('Registro exitoso:', response);
        this.registroexito=true;
      },
      error => {
        console.error('Error al registrar:', error); 
        this.registroexito=false;

      }
    );
  }

  random(){
    this.numerorandom=Math.floor(Math.random()*10);
  }

  onSubmit() {
    this.registrarUsuarioPokemon();
  }
}