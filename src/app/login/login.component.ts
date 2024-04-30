import { Component, OnInit } from '@angular/core';
import { ServicepokemonsService } from '../servicepokemons.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { ServiceusersService } from '../serviceusers.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true,
  imports:[RouterModule,FormsModule,CommonModule,HttpClientModule],
  providers:[ServiceusersService]
})
export class LoginComponent implements OnInit {

  credentials = {
    nombre: '',
    contrasena: ''
  };

  private authToken: string | null = null;

  numerorandom:number;

  redireccion:boolean|null=null;

  constructor(private router: Router,private userService:ServiceusersService) { }

  ngOnInit(): void {
    this.random();
    
  }

  random(){
    this.numerorandom=Math.floor(Math.random()*10)
  }

  login(): void {
    this.userService.login(this.credentials).subscribe(
      response => {
        this.redireccion=true;
        if(this.redireccion===true){
          localStorage.setItem('token', response.token);
          this.router.navigate(["/user"]);
          }
          this.userService.setAuthToken(response.token);
      },
      error => {
        this.redireccion=false;
      }
    );
  }

  
}