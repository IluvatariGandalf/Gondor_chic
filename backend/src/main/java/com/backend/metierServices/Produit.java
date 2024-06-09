package com.backend.metierServices;

public class Produit {
    private String reference;
    private String libelle;
    private float prix;
    private int quantiteEnStock;
    private boolean estDuJour;


    public Produit(String reference, String libelle, float prix, int quantiteEnStock, boolean estDuJour) {
        this.reference = reference;
        this.libelle = libelle;
        this.prix = prix;
        this.quantiteEnStock = quantiteEnStock;
        this.estDuJour = estDuJour;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }

    public int getQuantiteEnStock() {
        return quantiteEnStock;
    }

    public void setQuantiteEnStock(int quantiteEnStock) {
        this.quantiteEnStock = quantiteEnStock;
    }

    public boolean isEstDuJour() {
        return estDuJour;
    }

    public void setEstDuJour(boolean estDuJour) {
        this.estDuJour = estDuJour;
    }
}
