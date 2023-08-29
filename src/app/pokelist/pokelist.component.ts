import { Component } from '@angular/core';

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
}
