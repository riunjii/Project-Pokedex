import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokecardComponent } from './pokecard/pokecard.component';

@NgModule({
  declarations: [
    AppComponent,
    PokelistComponent,
    PokecardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
