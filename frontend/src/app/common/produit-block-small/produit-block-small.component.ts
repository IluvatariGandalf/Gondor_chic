import { Component, Input } from '@angular/core';
import { Produit } from '../../model/produit/produit.model';
import { PanierService } from '../../services/storage/panier.service';

@Component({
  selector: 'app-produit-block-small',
  standalone: true,
  imports: [],
  templateUrl: './produit-block-small.component.html',
  styleUrl: './produit-block-small.component.css'
})
export class ProduitBlockSmallComponent {
    @Input({alias:'produit'}) produit!: Produit;

    constructor(private panierService: PanierService){}

    ajoutPanier(){
        this.panierService.ajoutPanier(this.produit, 1);
    }
}
