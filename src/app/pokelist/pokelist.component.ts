import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent {
  pokemons = [
    'Bulbasaur',
    'Ivysaur',
    'Venosaur'
  ];

  constructor(private pokemonService: PokemonService){}
}
