-- Création de la base de données GONDORCHIC
--CREATE DATABASE GONDORCHIC;


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
----------------- Table N°1 : "GONDOR_PROJECT"."T_UTILISATEUR" ----------------
----------------------------------------------------------------------------
DROP TABLE IF EXISTS "T_UTILISATEUR" ;
CREATE TABLE "T_UTILISATEUR" 
(
"ID"                UUID PRIMARY KEY DEFAULT Uuid_generate_v4(),
"username"          VARCHAR(100) NOT NULL,
"login"             VARCHAR(100) NOT NULL,	
"password"          VARCHAR(255) NOT NULL,
"dateInscription"   DATE
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
    prix FLOAT NOT NULL,
    quantiteEnStock INT,
    imageLink VARCHAR(255)
);



----------------------------------------------------------------------------
-------- Requête N°1 : Insertion des produits -------
----------------------------------------------------------------------------

INSERT INTO T_PRODUIT(reference ,libelle,estDuJour,prix,quantiteEnStock ,imageLink) VALUES
('REF001','Poudre de fée',true,250,500,''),
('REF002','Palantir',false,300,500,''),
('REF003','Pierre Arcane',true,500,500,'');
    

----------------------------------------------------------------------------
-------- Requête N°2 : Obtention des produits du jour -------
----------------------------------------------------------------------------
SELECT * FROM t_produit 
WHERE estDuJour = true;
