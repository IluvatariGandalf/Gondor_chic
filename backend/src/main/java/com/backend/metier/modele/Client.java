package com.backend.metier.modele;

public class Client {
    private String numero;
    private String pseudo;
    private String motDePasse;
    private String nom;
    private String prenom;

    public Client(String numero, String pseudo, String motDePasse, String nom, String prenom) {
        this.numero = numero;
        this.pseudo = pseudo;
        this.motDePasse = motDePasse;
        this.nom = nom;
        this.prenom = prenom;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getPseudo() {
        return pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
}
