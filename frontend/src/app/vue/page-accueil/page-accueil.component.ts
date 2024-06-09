import { Component, OnInit } from '@angular/core';
import { HorizontalNavBarComponent } from '../../common/horizontal-nav-bar/horizontal-nav-bar.component';
import { ProduitDuJourBlockComponent } from '../../common/produit-du-jour-block/produit-du-jour-block.component';
import { ProduitBlockSmallComponent } from '../../common/produit-block-small/produit-block-small.component';
import { Produit } from '../../model/produit/produit.model';
import { CommonModule } from '@angular/common';

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
    produits: Produit[] = [
        new Produit("xxx", "Produit", 99.99, 99, true),
        new Produit("xxx", "Produit", 99.99, 99, true),
        new Produit("xxx", "Produit", 99.99, 99, true),
        new Produit("xxx", "Produit", 99.99, 99, true)
    ];
    categories: any = [ "Objets Magiques", "Armure", "Armements"];
    
    ngOnInit(): void {
        this.produitDuJour = new Produit("xxx", "Produit du jour", 99.99, 99, true);
    }
    
}
