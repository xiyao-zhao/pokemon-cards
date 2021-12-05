import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck, Subject } from 'rxjs';
import { PokemonResponse } from '../pokemon.interface';

@Injectable()
export class PokemonService {
    //cards$ = new Subject<PokemonResponse[]>();
    baseURL: string = "https://pokeapi.co/api/v2/pokemon/"
    url: string;
    //cards = [];

    constructor(private http: HttpClient) { }

    getPokemon(name: string): Observable<PokemonResponse> {
            this.url = this.baseURL + name;
            //this.cards.push(this.url)

            return this.http.get<PokemonResponse>(this.url)
    }

    // getAll(bookname: any): Observable<any> {
    //     return this.http.get(this.baseURL + bookname).pipe(
    //         pluck("items"),
    //         map((itemArr: []) => itemArr.map((item: { volumeInfo: { imageLinks: {smallThumbnail: string}; title: string; authors: string[]; publisher: string; publishedDate: string; description: string } }) => ({
    //             image: item.volumeInfo.imageLinks.smallThumbnail,
    //             title: item.volumeInfo.title,
    //             authors: item.volumeInfo.authors,
    //             publisher: item.volumeInfo.publisher,
    //             publishedDate: item.volumeInfo.publishedDate,
    //             description: item.volumeInfo.description
    //         }))),
    //         tap(myArr => {
    //             this.books$.next(myArr);
    //         })
    //     )
    // }
}
