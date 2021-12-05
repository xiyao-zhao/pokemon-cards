import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CardComponent } from './card/card.component';

import { PokemonService } from './service/pokemon.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { SingleCardComponent } from './single-card/single-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    CardComponent,
    DialogComponent,
    SingleCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
