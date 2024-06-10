import { Component, Input } from '@angular/core';
import { Produit } from '../../model/produit/produit.model';

@Component({
  selector: 'app-produit-block-small',
  standalone: true,
  imports: [],
  templateUrl: './produit-block-small.component.html',
  styleUrl: './produit-block-small.component.css'
})
export class ProduitBlockSmallComponent {
    @Input({alias:'produit'}) produit!: Produit;
}
