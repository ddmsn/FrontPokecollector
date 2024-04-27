import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private router:Router) {
   }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigate(['/user']);

  }

}
