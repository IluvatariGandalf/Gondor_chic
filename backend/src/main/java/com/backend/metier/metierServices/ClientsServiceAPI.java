package com.backend.metier.metierServices;

import com.backend.metier.modele.Client;

public interface ClientsServiceAPI {
    Client rechercherClientParPseudo(String pseudo, String motDePasse) throws Exception;
}
