import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccueilComponent } from './page-accueil.component';
import { ProduitService } from '../../services/produit/produit.service';
import { HttpClientModule } from '@angular/common/http';

describe('PageAccueilComponent', () => {
    let component: PageAccueilComponent;
    let fixture: ComponentFixture<PageAccueilComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PageAccueilComponent, HttpClientModule],
            providers: [ProduitService]
        })
        .compileComponents();

        fixture = TestBed.createComponent(PageAccueilComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('doit etre créée', () => {
        expect(component).toBeTruthy();
    });
});
