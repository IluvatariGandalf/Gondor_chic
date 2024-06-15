import { Component, Input } from '@angular/core';
import { Produit } from '../../model/produit/produit.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanierService } from '../../services/storage/panier.service';

@Component({
  selector: 'app-produit-du-jour-block',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produit-du-jour-block.component.html',
  styleUrl: './produit-du-jour-block.component.css'
})
export class ProduitDuJourBlockComponent {
    @Input({alias:'produit'}) produitDuJour!: Produit;
    qteProduit: number = 0;

    constructor(private panierService: PanierService){}

    ajoutPanier(){
        this.panierService.ajoutPanier(this.produitDuJour, this.qteProduit);
    }
}
