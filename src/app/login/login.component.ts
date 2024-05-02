import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ServiceusersService } from '../serviceusers.service';

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

  private authToken: string | null = null;

  numerorandom:number;

  redireccion:boolean|null=null;

  constructor(private router: Router, private userService:ServiceusersService) { }

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
          sessionStorage.setItem('token', response.token);
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