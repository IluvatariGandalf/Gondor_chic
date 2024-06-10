import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitBlockSmallComponent } from './produit-block-small.component';
import { Produit } from '../../model/produit/produit.model';

describe('ProduitBlockSmallComponent', () => {
  let component: ProduitBlockSmallComponent;
  let fixture: ComponentFixture<ProduitBlockSmallComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [ProduitBlockSmallComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(ProduitBlockSmallComponent);
        component = fixture.componentInstance;

        component.produit = new Produit("REF001", "Libelle", 999.99, 99, false, "");

        fixture.detectChanges();
    });

    it('doit etre créée', () => {
        expect(component).toBeTruthy();
    });

    it('doit avoir un instance de Produit', () => {
        expect(component.produit instanceof Produit).toBeTruthy();
    });
});
