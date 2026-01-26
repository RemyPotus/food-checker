import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SearchResponseDto } from '../models/search-response.model';

@Injectable({
    providedIn: 'root',
})
export class AlimentService{
    private ALIMENTS_URL = 'https://fr.openfoodfacts.org/cgi/search.pl?action=process&json=1'
    private http = inject(HttpClient);

    public getAliments(){
        return this.http.get<SearchResponseDto>(this.ALIMENTS_URL)
    }
}
