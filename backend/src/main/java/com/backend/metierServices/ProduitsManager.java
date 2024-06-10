package com.backend.metierServices;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProduitsManager {
    private static final String DB_URL = "jdbc:postgresql://localhost:5432/gondorchic";
    private static final String DB_USER = "postgres";
    private static final String DB_PASSWORD = "root";
    public static Produit rechercherProduitDuJour() {
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

    public static List<Produit> getProduits() {
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

    public static void main(String[] args) {
        Produit produitDuJour = ProduitsManager.rechercherProduitDuJour();

        if (produitDuJour != null) {
            System.out.println("Produit du jour: " + produitDuJour.getLibelle());
        } else {
            System.out.println("Aucun produit du jour trouvé.");
        }

        List<Produit> allProduits = ProduitsManager.getProduits();
        for (Produit produit : allProduits) {
            System.out.println(produit.getLibelle());
        }
    }
}
