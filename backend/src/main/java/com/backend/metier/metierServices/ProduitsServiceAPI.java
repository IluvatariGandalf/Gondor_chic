package com.backend.metier.metierServices;

import com.backend.metier.modele.Produit;
import java.util.List;

public interface ProduitsServiceAPI {
    Produit rechercherProduitDuJour();
    List<Produit> getProduits();
}
