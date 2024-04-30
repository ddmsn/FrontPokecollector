import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListapokemonsComponent } from "../listapokemons/listapokemons.component";

@Component({
    selector: 'app-pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.css'],
    standalone: true,
    imports: [RouterModule, ListapokemonsComponent]
})
export class PokedexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
