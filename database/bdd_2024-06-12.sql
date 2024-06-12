-- Création de la base de données GONDORCHIC
CREATE DATABASE GONDORCHIC;


-- Création du schéma GONDOR_PROJECT
DROP SCHEMA IF EXISTS "GONDOR_PROJECT";
CREATE SCHEMA "GONDOR_PROJECT";

----------------------------------------------------------------------------
----------------- Script de création des différentes tables ----------------
----------------------------------------------------------------------------

-- Définir le schéma à utiliser
SET SEARCH_PATH = "GONDOR_PROJECT";

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

----------------------------------------------------------------------------
----------------- Table N°1 : "GONDOR_PROJECT"."T_CLIENT" ----------------
----------------------------------------------------------------------------
DROP TABLE IF EXISTS "T_CLIENT" ;
CREATE TABLE T_CLIENT
(
    numero              UUID PRIMARY KEY DEFAULT Uuid_generate_v4(),
    pseudo               VARCHAR(100) NOT NULL,
    motDePasse           VARCHAR(100) NOT NULL,
    nom                  VARCHAR(100) NOT NULL,	
    prenom               VARCHAR(255) NOT NULL
);

----------------------------------------------------------------------------
----------------- Table N°2 : "GONDOR_PROJECT"."T_PRODUIT" ----------------
----------------------------------------------------------------------------
DROP TABLE IF EXISTS "T_PRODUIT" ;
CREATE TABLE T_PRODUIT(
    ID UUID PRIMARY KEY DEFAULT Uuid_generate_v4(),
    reference VARCHAR(100) NOT NULL,
    libelle VARCHAR(250) NOT NULL,
    estDuJour BOOLEAN NOT NULL,
    prix NUMERIC NOT NULL,
    quantiteEnStock INT,
    imageLink VARCHAR(255)
);



----------------------------------------------------------------------------
-------- Requête N°1 : Insertion des produits -------
----------------------------------------------------------------------------

INSERT INTO T_PRODUIT(reference ,libelle,estDuJour,prix,quantiteEnStock ,imageLink) VALUES
('REF001','Poudre de fée',false,250,500,'produitImg/poudre_de_fee.jpeg'),
('REF002','Palantir',true,300,500,'produitImg/palantir.jpg'),
('REF003','Pierre Arcane',false,500,500,'produitImg/pierre_arcane.jpg');

----------------------------------------------------------------------------
-------- Requête N°1 : Insertion des clients -------
----------------------------------------------------------------------------

INSERT INTO T_CLIENT(pseudo,motdepasse,nom,prenom) VALUES
('frondon','1234#','Frodon','Le Magnifique'),
('sauron','5678#','Sauron','Merveille');
    

----------------------------------------------------------------------------
-------- Requête N°2 : Obtention des produits du jour -------
----------------------------------------------------------------------------
SELECT * FROM t_produit 
WHERE estDuJour = true;
