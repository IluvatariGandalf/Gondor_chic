package com.backend.controleur;

import com.backend.metier.metierServices.ClientsServiceAPI;
import com.backend.metier.metierServices.ProduitsServiceAPI;
import com.backend.metier.modele.Client;
import com.backend.metier.modele.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SessionPasserCde {
    @Autowired
    ProduitsServiceAPI produitsServiceAPI;

    @Autowired
    ClientsServiceAPI clientsServiceAPI;

    @PostMapping("/connexion")
    public ResponseEntity<?> connexion(@RequestBody Client client) {
        try {
            Client clientTrouve = clientsServiceAPI.rechercherClientParPseudo(client.getPseudo(), client.getMotDePasse());
            return ResponseEntity.ok(clientTrouve);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/produitDuJour")
    public ResponseEntity<?> getProduitDuJour() {
        Produit produitDuJour = produitsServiceAPI.rechercherProduitDuJour();
        if (produitDuJour != null) {
            return ResponseEntity.ok(produitDuJour);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/produits")
    public ResponseEntity<?> getProduits() {
        return ResponseEntity.ok(produitsServiceAPI.getProduits());
    }
}
