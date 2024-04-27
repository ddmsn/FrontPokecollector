import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ServicepokemonsService } from '../servicepokemons.service';

@Component({
  selector: 'app-listapokemons',
  templateUrl: './listapokemons.component.html',
  styleUrls: ['./listapokemons.component.css']
})
export class ListapokemonsComponent implements OnInit {

  pokemons:Pokemon[];

  constructor(private servicepokemonsService:ServicepokemonsService) { }

  ngOnInit(): void {
   this.obtenerpokemons();

  }

  private obtenerpokemons(){
    this.servicepokemonsService.obtenerPokemons().subscribe(dato =>{
      this.pokemons=dato;
    })
  }
  getPokemonInfo(pokemon: Pokemon): string {
    return `HP: ${pokemon.hp}`;
  }

  getPokemonAtk(pokemon: Pokemon): string {
    return `ATK: ${pokemon.atk}`;
  }

  getPokemonAtkEsp(pokemon: Pokemon): string {
    return `ATK_ESP: ${pokemon.atk_esp}`;
  }

  getPokemonDef(pokemon: Pokemon): string {
    return `DEF: ${pokemon.def}`;
  }

  getPokemonDefEsp(pokemon: Pokemon): string {
    return `DEF_ESP: ${pokemon.def_esp}`;
  }

  getPokemonVel(pokemon: Pokemon): string {
    return `VEL: ${pokemon.vel}`;
  }

  

}
