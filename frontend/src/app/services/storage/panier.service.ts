import { Injectable } from '@angular/core';
import { Produit } from '../../model/produit/produit.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

    constructor() { }

    
    ajoutPanier(produit: Produit, qte: any) {
        if (typeof window !== 'undefined' && window.localStorage) {
            var panier = JSON.parse( localStorage.getItem("panier") || '{}');

            if(panier[produit.reference] != undefined){
                panier[produit.reference]["produit"] = JSON.stringify(produit);
                panier[produit.reference]["qte"] += parseInt(qte);
            } else {
                panier[produit.reference] = {}
                panier[produit.reference]["produit"] = JSON.stringify(produit);
                panier[produit.reference]["qte"] = parseInt(qte);
            }
            localStorage.setItem("panier", JSON.stringify(panier));
            console.log(localStorage)

            // if (localStorage.getItem("panier")){
                
            // }
            // else{
            //     var panier = JSON.parse( localStorage.getItem("panier") || '{}');
            //     console.log(panier)

            //     panier[produit.reference] = parseInt(qte);

            //     localStorage.setItem("panier", "{}");
            //     console.log(localStorage)
            // }
        }
    }


    getPanier() {
        var data = '{}';
        if (typeof window !== 'undefined' && window.localStorage) {
            data = localStorage.getItem("panier") || '{}';
        }
        return JSON.parse(data);
    }
}
