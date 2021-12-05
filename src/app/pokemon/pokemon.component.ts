import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, concatMap, forkJoin } from 'rxjs';
import { PokemonService } from '../service/pokemon.service';
import { PokemonResponse } from '../pokemon.interface';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectService } from '../service/select.service';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    starterPokemon = ["bulbasaur", "squirtle", "charmander"]
    pokemonArr$: Observable<PokemonResponse[]>;

    //pokemon: PokemonResponse;
    selectedPokemon$: Observable<PokemonResponse>;
    displayItem = false;

    constructor(
        private pokemonService: PokemonService, 
        private selectService: SelectService,
        public dialog: MatDialog
    ) {}

    public getPokemon() {
        this.pokemonArr$ = forkJoin(
            this.starterPokemon.map((pokemon: string) => 
                this.pokemonService.getPokemon(pokemon)
            )
        );
    }

    openDialog(pokemon: PokemonResponse) {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '300px',
            data: pokemon,
        })
        dialogRef.afterClosed().subscribe((result: string) => {
            this.selectService.Select(result);
        })
    }

    showAll() {
        this.selectService.All();
    }

    ngOnInit(): void {
        this.getPokemon();
        this.selectService.select$.subscribe((result: string) => {
            if(result) {
                this.displayItem = true;
                this.selectedPokemon$ = this.pokemonService.getPokemon(result);
            } else {
                this.displayItem = false;
                this.starterPokemon = [];
            }
        })
    }
}
