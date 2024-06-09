import { Component, Input } from '@angular/core';
import { Produit } from '../../model/produit/produit.model';

@Component({
  selector: 'app-produit-du-jour-block',
  standalone: true,
  imports: [],
  templateUrl: './produit-du-jour-block.component.html',
  styleUrl: './produit-du-jour-block.component.css'
})
export class ProduitDuJourBlockComponent {
    @Input({alias:'produit'}) produitDuJour!: Produit;
}
