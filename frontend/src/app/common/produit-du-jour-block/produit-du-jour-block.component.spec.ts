import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDuJourBlockComponent } from './produit-du-jour-block.component';
import { Produit } from '../../model/produit/produit.model';

describe('ProduitDuJourBlockComponent', () => {
    let component: ProduitDuJourBlockComponent;
    let fixture: ComponentFixture<ProduitDuJourBlockComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [ProduitDuJourBlockComponent]
        })
        .compileComponents();

        fixture = TestBed.createComponent(ProduitDuJourBlockComponent);
        component = fixture.componentInstance;

        component.produitDuJour = new Produit("REF001", "Libelle", 999.99, 99, false, "");


        fixture.detectChanges();
    });

    it('doit etre créée', () => {
        expect(component).toBeTruthy();
    });

    it('doit avoir un instance de Produit', () => {
        expect(component.produitDuJour instanceof Produit).toBeTruthy();
    });
});
