import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from '../../model/produit/produit.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
    constructor(private http: HttpClient) { }

    rechercherProduitDuJour(){
        return this.http.get(`${environment.API_BASE_URL}/produitDuJour`)
    }

    getProduits(){
        return this.http.get(`${environment.API_BASE_URL}/produits`)
    }
}
