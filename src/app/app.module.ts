import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { AppComponent }       from './app.component';
import { PokelistComponent }  from './pokelist/pokelist.component';
import { PokecardComponent }  from './pokecard/pokecard.component';

import {HttpClientModule}     from '@angular/common/http'
import { PokemonService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokecardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
