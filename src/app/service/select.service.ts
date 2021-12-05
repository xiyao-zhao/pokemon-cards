import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PokemonResponse } from '../pokemon.interface';

@Injectable({
    providedIn: 'root'
})
export class SelectService {
    select$ = new Subject();
    constructor() { }

    Select(name: string) {
        this.select$.next(name);
    }

    All() {
        this.select$.next("");
    }
}
