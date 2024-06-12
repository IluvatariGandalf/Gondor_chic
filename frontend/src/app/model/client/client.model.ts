export class Client {
    private _numero!: number;
    public get numero(): number {
        return this._numero;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    
    private _pseudo!: string;
    public get pseudo(): string {
        return this._pseudo;
    }
    public set pseudo(value: string) {
        this._pseudo = value;
    }
    
    private _motDePasse!: string;
    public get motDePasse(): string {
        return this._motDePasse;
    }
    public set motDePasse(value: string) {
        this._motDePasse = value;
    }
    
    private _nom!: string;
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    
    private _prenom!: string;
    public get prenom(): string {
        return this._prenom;
    }
    public set prenom(value: string) {
        this._prenom = value;
    }

    public constructor(numero: number, pseudo: string, motdepasse: string, nom: string, prenom: string){
        this.numero = numero;
        this.pseudo = pseudo;
        this.motDePasse = motdepasse;
        this.nom = nom;
        this.prenom = prenom;
    }
}
