import { Component, OnInit } from '@angular/core';
import { ServicepokemonsService } from '../servicepokemons.service';
import { register_user } from '../user_register';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registroexito:boolean=false;

  userData:register_user = {
    nombre: '',
    email: '',
    contrasena:''
  };
  
  user_register:register_user;

  constructor(private servicioPokemons:ServicepokemonsService) { }

  ngOnInit(): void {
  }
  registrarUsuarioPokemon() {
    this.servicioPokemons.guardarUserPokemon(this.userData).subscribe(
      response => {
        console.log('Registro exitoso:', response);
        this.registroexito=true;
        // Aquí puedes manejar cualquier lógica adicional después de un registro exitoso, por ejemplo, redirigir al usuario a otra página
      },
      error => {
        console.error('Error al registrar:', error);  
        console.log(this.userData.contrasena)      // Aquí puedes manejar cualquier lógica para errores durante el registro, por ejemplo, mostrar un mensaje de error al usuario
      }
    );
  }

  onSubmit() {
    this.registrarUsuarioPokemon();
  }
}