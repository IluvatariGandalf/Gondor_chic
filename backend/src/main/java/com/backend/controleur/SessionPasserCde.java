package com.backend.controleur;

import com.backend.metierServices.Produit;
import com.backend.metierServices.ProduitsManager;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SessionPasserCde {
    @GetMapping("/produitDuJour")
    public ResponseEntity<?> getProduitDuJour() {
        Produit produitDuJour = ProduitsManager.rechercherProduitDuJour();
        if (produitDuJour != null) {
            return ResponseEntity.ok(produitDuJour);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/produits")
    public ResponseEntity<?> getProduits() {
        return ResponseEntity.ok(ProduitsManager.getProduits());
    }

}
