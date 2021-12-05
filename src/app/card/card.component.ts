import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonResponse } from '../pokemon.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() pokemon: PokemonResponse;
    @Output() clicked = new EventEmitter();

    constructor() { }

    pickPokemon(): void {
        this.clicked.emit(this.pokemon);
    }

    ngOnInit(): void {
    }
}
