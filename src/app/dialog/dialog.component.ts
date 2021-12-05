import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokemonResponse } from '../pokemon.interface';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { SelectService } from '../service/select.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
    //@Input() pokemon: PokemonResponse;

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: PokemonResponse,
    ) {}

    onNoClick() {
        this.dialogRef.close();
    }


    ngOnInit(): void {
    }

}
