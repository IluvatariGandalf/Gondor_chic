package com.backend.metierServices;

import java.sql.*;

public class ProduitsManager {
    private static final String DB_URL = "jdbc:postgresql://localhost:5432/gondor_chic";
    private static final String DB_USER = "postgres";
    private static final String DB_PASSWORD = "root";
    public static Produit rechercherProduitDuJour() {
        String query = "SELECT reference, libelle, prix, quantiteEnStock, estDuJour FROM T_PRODUIT WHERE estDuJour = TRUE";
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             PreparedStatement pstmt = conn.prepareStatement(query);
             ResultSet rs = pstmt.executeQuery()) {

            if (rs.next()) {
                String reference = rs.getString("reference");
                String libelle = rs.getString("libelle");
                float prix = rs.getFloat("prix");
                int quantiteEnStock = rs.getInt("quantiteEnStock");
                boolean estDuJour = rs.getBoolean("estDuJour");

                return new Produit(reference, libelle, prix, quantiteEnStock, estDuJour);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        // If no product of the day is found, return null or handle accordingly
        return null;
    }

    public static void main(String[] args) {
        Produit produitDuJour = ProduitsManager.rechercherProduitDuJour();

        if (produitDuJour != null) {
            System.out.println("Produit du jour: " + produitDuJour.getLibelle());
        } else {
            System.out.println("Aucun produit du jour trouvé.");
        }
    }
}
