import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ServicepokemonsService } from '../servicepokemons.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServiceusersService } from '../serviceusers.service';

@Component({
  selector: 'app-listapokemons',
  templateUrl: './listapokemons.component.html',
  styleUrls: ['./listapokemons.component.css'],
  standalone:true,
  imports:[RouterModule,FormsModule,CommonModule,HttpClientModule],
  providers:[ServiceusersService,ServicepokemonsService]
})
export class ListapokemonsComponent implements OnInit {

  tiposPokemon: string[] = [
    "Todos",
    "Normal",
    "Planta",
    "Veneno",
    "Fuego",
    "Agua",
    "Eléctrico",
    "Hielo",
    "Volador",
    "Psíquico",
    "Fantasma",
    "Bicho",
    "Lucha",
    "Tierra",
    "Roca"
  ];

    tipoSeleccionado: string = "Todos";


  pokemons:Pokemon[];

  pokemonBackup: Pokemon[];


  constructor(private servicepokemonsService:ServicepokemonsService) { }

  ngOnInit(): void {
   this.obtenerpokemons();
  }

  private obtenerpokemons(){
    this.servicepokemonsService.obtenerPokemons().subscribe(dato =>{     
      this.pokemons=dato;
      this.pokemonBackup = dato ? dato.slice() : [];
      this.filtrar();
    })
  }

  filtrar() {
    if(this.tipoSeleccionado==="Todos"){
      this.pokemons = this.pokemonBackup.slice();
      return;
    }
    this.pokemons = this.pokemonBackup.filter(pokemon => {
      return pokemon.tipo.includes(this.tipoSeleccionado);
    });
  }

  getPokemonTipo(pokemon:Pokemon):string{
    return `Tipo:${pokemon.tipo}`;
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
