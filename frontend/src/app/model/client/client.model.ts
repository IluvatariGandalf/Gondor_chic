export class Client {
    numero!: number;
    pseudo!: string;
    motDePasse!: string;
    nom!: string;
    prenom!: string;

    public constructor(numero: number, pseudo: string, motdepasse: string, nom: string, prenom: string){
        this.numero = numero;
        this.pseudo = pseudo;
        this.motDePasse = motdepasse;
        this.nom = nom;
        this.prenom = prenom;
    }
}
