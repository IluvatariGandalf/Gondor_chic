package com.backend.metierServices;

public class Produit {
    private String reference;
    private String libelle;
    private float prix;
    private int quantiteEnStock;
    private boolean estDuJour;

    private String imageLink;

    public Produit(String reference, String libelle, float prix, int quantiteEnStock, boolean estDuJour, String imageLink) {
        this.reference = reference;
        this.libelle = libelle;
        this.prix = prix;
        this.quantiteEnStock = quantiteEnStock;
        this.estDuJour = estDuJour;
        this.imageLink = imageLink;
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

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }
}
