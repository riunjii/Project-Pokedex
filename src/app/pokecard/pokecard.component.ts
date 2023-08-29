import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent {
  
  @Input()
  pokemon!: string;

  @Input()
  numero!: number;

  catchPokeImage(){
    const formatNumber = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber}.png`;

  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }

}
