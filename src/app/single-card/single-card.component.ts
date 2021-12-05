import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonResponse } from '../pokemon.interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-single-card',
    templateUrl: './single-card.component.html',
    styleUrls: ['./single-card.component.css', 
    '../card/card.component.css'
]
})
export class SingleCardComponent implements OnInit {
    @Input() pokemonSelect: PokemonResponse;
    @Output() clickedAll = new EventEmitter();

    all(): void {
        this.clickedAll.emit();
    }

    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
    }

}
