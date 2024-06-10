import { Produit } from './produit.model';

describe('Produit', () => {
    it('doit créée une instance', () => {
        expect(new Produit("REF001", "Libelle", 999.99, 99, false, "")).toBeTruthy();
    });
});
