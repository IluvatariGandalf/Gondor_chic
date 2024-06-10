import { Component, OnInit } from '@angular/core';
import { HorizontalNavBarComponent } from '../../common/horizontal-nav-bar/horizontal-nav-bar.component';
import { ProduitDuJourBlockComponent } from '../../common/produit-du-jour-block/produit-du-jour-block.component';
import { ProduitBlockSmallComponent } from '../../common/produit-block-small/produit-block-small.component';
import { Produit } from '../../model/produit/produit.model';
import { CommonModule } from '@angular/common';
import { ProduitService } from '../../services/produit/produit.service';

@Component({
    selector: 'app-page-accueil',
    standalone: true,
    imports: [
        HorizontalNavBarComponent,
        ProduitDuJourBlockComponent,
        ProduitBlockSmallComponent,
        CommonModule
    ],
    templateUrl: './page-accueil.component.html',
    styleUrl: './page-accueil.component.css'
})
export class PageAccueilComponent implements OnInit{
    produitDuJour!: Produit;
    produits: Produit[] = [];
    categories: any = [ "Objets Magiques", "Armure", "Armements"];
    
    constructor(private produitService: ProduitService){}

    ngOnInit(): void {

        this.produitService.rechercherProduitDuJour().subscribe({
            next: (response) => {
                var data = JSON.parse(JSON.stringify(response));
                this.produitDuJour = new Produit(data.reference, data.libelle, data.prix, data.quantiteEnStock, data.estDuJour);
            },
            error: (error) => {
                console.log(error)
            }
        });

        this.produitService.getProduits().subscribe({
            next: (response) => {
                var datas = JSON.parse(JSON.stringify(response)); 
                for(let item of datas){
                    var data = JSON.parse(JSON.stringify(item));
                    this.produits.push( new Produit(data.reference, data.libelle, data.prix, data.quantiteEnStock, data.estDuJour) );
                }              
            },
            error: (error) => {
                console.log(error)
            }
        })
        
    }
    
}
