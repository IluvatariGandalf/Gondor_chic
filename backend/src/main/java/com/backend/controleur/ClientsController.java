package com.backend.controleur;

import com.backend.metierServices.Client;
import com.backend.metierServices.ClientsManager;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientsController {
    @PostMapping("/connexion")
    public ResponseEntity<?> connexion(@RequestBody Client client) {
        try {
            Client clientTrouve = ClientsManager.rechercherClientParPseudo(client.getPseudo(), client.getMotDePasse());
            return ResponseEntity.ok(clientTrouve);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
