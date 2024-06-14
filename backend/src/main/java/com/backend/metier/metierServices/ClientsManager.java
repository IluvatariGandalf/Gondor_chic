package com.backend.metier.metierServices;

import com.backend.metier.modele.Client;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.sql.*;

@Service
public class ClientsManager implements ClientsServiceAPI {
    @Value("${spring.datasource.url}")
    private String DB_URL;
    @Value("${spring.datasource.username}")
    private String DB_USER;
    @Value("${spring.datasource.password}")
    private String DB_PASSWORD;

    public Client rechercherClientParPseudo(String pseudo, String motDePasse) throws Exception {
        String query = "SELECT numero, pseudo, motdepasse, nom, prenom FROM \"GONDOR_PROJECT\".\"t_client\" WHERE pseudo = ? AND motdepasse = ?";
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            pstmt.setString(1, pseudo);
            pstmt.setString(2, motDePasse);
            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                String numero = rs.getString("numero");
                String pseudoClient = rs.getString("pseudo");
                String motDePasseClient = rs.getString("motdepasse");
                String nom = rs.getString("nom");
                String prenom = rs.getString("prenom");
                return new Client(numero, pseudoClient, motDePasseClient, nom, prenom);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            throw new Exception("An error occurred while trying to connect to the database. Please try again later.");
        }
        throw new Exception("Client not found");
    }

    /*public static List<Client> getClients(){
        String query = "SELECT numero, pseudo, motdepasse, nom, prenom FROM \"GONDOR_PROJECT\".\"t_client\"";
        List<Client> clients = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(query);
             ResultSet rs = pstmt.executeQuery()) {
            while (rs.next()) {
                String numero = rs.getString("numero");
                String pseudo = rs.getString("pseudo");
                String motDePasse = rs.getString("motdepasse");
                String nom = rs.getString("nom");
                String prenom = rs.getString("prenom");
                Client client = new Client(numero, pseudo, motDePasse, nom, prenom);
                clients.add(client);
            }
        } catch (SQLException e) {
            e.printStackTrace();
    }
        return clients;
    }*/

}
