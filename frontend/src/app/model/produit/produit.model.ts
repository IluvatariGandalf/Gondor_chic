export class Produit {

    private _reference!: string;
    public get reference(): string {
        return this._reference;
    }
    public set reference(value: string) {
        this._reference = value;
    }
    
    private _libelle!: string;
    public get libelle(): string {
        return this._libelle;
    }
    public set libelle(value: string) {
        this._libelle = value;
    }

    private _prix!: number;
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }

    private _quantiteEnStock!: number;
    public get quantiteEnStock(): number {
        return this._quantiteEnStock;
    }
    public set quantiteEnStock(value: number) {
        this._quantiteEnStock = value;
    }

    private _estDuJour!: boolean;
    public get estDuJour(): boolean {
        return this._estDuJour;
    }
    public set estDuJour(value: boolean) {
        this._estDuJour = value;
    }

    private _imageLink!: string;
    public get imageLink(): string {
        return this._imageLink;
    }
    public set imageLink(value: string) {
        this._imageLink = value;
    }

    public constructor(reference: string, libelle: string, prix: number, quantiteEnStock: number, estDuJour: boolean, imageLink: string){
        this.reference = reference;
        this.libelle = libelle;
        this.prix = prix;
        this.quantiteEnStock = quantiteEnStock;
        this.estDuJour = estDuJour;
        this.imageLink = imageLink;
    }
}
