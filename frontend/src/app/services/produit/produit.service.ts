import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../../model/produit/produit.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
    httpHeaders: HttpHeaders = new HttpHeaders({
        "ngrok-skip-browser-warning": 'ngrok'
    });

    constructor(private http: HttpClient) { }

    rechercherProduitDuJour(){
        return this.http.get(`${environment.API_BASE_URL}/produitDuJour`, { headers: this.httpHeaders })
    }

    getProduits(){
        return this.http.get(`${environment.API_BASE_URL}/produits`, { headers: this.httpHeaders })
    }
}
