import { Injectable } from '@angular/core';
import { Aliment } from '../models/Aliment';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class AlimentService{
    private ALIMENTS_URL = 'https://fr.openfoodfacts.org/cgi/search.pl?action=process&json=1'

    constructor(private http: HttpClient){}


    public getAliments(){
        return this.http.get<Aliment[]>(this.ALIMENTS_URL)
    }
}
