package com.backend.metier.metierServices;

import com.backend.metier.modele.Produit;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProduitsManager implements ProduitsServiceAPI {
    @Value("${spring.datasource.url}")
    private String DB_URL;
    @Value("${spring.datasource.username}")
    private String DB_USER;
    @Value("${spring.datasource.password}")
    private String DB_PASSWORD;
    public Produit rechercherProduitDuJour() {
        String query = "SELECT reference, libelle, prix, quantiteEnStock, estDuJour, imageLink FROM \"GONDOR_PROJECT\".\"t_produit\" WHERE estDuJour = TRUE";
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(query);
             ResultSet rs = pstmt.executeQuery()) {

            if (rs.next()) {
                String reference = rs.getString("reference");
                String libelle = rs.getString("libelle");
                float prix = rs.getFloat("prix");
                int quantiteEnStock = rs.getInt("quantiteEnStock");
                boolean estDuJour = rs.getBoolean("estDuJour");
                String imageLink = rs.getString("imageLink");

                return new Produit(reference, libelle, prix, quantiteEnStock, estDuJour, imageLink);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        // If no product of the day is found, return null or handle accordingly
        return null;
    }

    public List<Produit> getProduits() {
        String query = "SELECT reference, libelle, prix, quantiteEnStock, estDuJour, imageLink FROM \"GONDOR_PROJECT\".\"t_produit\"";
        List<Produit> produits = new ArrayList<>();
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(query);
             ResultSet rs = pstmt.executeQuery()) {

            while (rs.next()) {
                String reference = rs.getString("reference");
                String libelle = rs.getString("libelle");
                float prix = rs.getFloat("prix");
                int quantiteEnStock = rs.getInt("quantiteEnStock");
                boolean estDuJour = rs.getBoolean("estDuJour");
                String imageLink = rs.getString("imageLink");

                Produit produit = new Produit(reference, libelle, prix, quantiteEnStock, estDuJour, imageLink);
                produits.add(produit);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return produits;
    }

}
