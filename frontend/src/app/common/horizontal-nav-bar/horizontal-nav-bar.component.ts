import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { Client } from '../../model/client/client.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/storage/local-storage.service';
import { FormsModule } from '@angular/forms';
import { PanierService } from '../../services/storage/panier.service';

@Component({
  selector: 'app-horizontal-nav-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './horizontal-nav-bar.component.html',
  styleUrl: './horizontal-nav-bar.component.css'
})
export class HorizontalNavBarComponent implements OnInit{
    client: any;
    pseudo: string = "";
    motDePasse: string = "";
    loginError: any;
    showModal = "";

    panier: any[] = [];

    constructor(
        private clientService: ClientService, 
        private localStorage: LocalStorageService, 
        private panierService: PanierService, 
        private router: Router
    ){}

    ngOnInit(): void {
        this.client = this.localStorage.getItem("client");
        this.getPanier();
    }

    getPanier(){
        this.panier = [];
        var panier = this.panierService.getPanier();
        for (const [key, value] of Object.entries(panier)) {
            var item = JSON.parse(JSON.stringify(value));
            item.produit = JSON.parse(item.produit);
            this.panier.push(item);
        }
    }

    sIdentifier(){
        this.loginError = undefined;
        var client = new Client(0, this.pseudo, this.motDePasse, "", "");
        this.clientService.sIdentifier(client).subscribe({
            next: (response) => {
                var data = JSON.stringify(response);
                this.client = data;
                this.localStorage.setItem("client", data);
            },
            error: (error) => {
                this.loginError = error;
            },
            complete: () => {
                this.closeModal();
                this.router.navigateByUrl('/PageAccueilPerso')
            }
        });
    }

    seDeconnecter(){
        this.localStorage.clear();
        this.router.navigateByUrl('/')
    }

    openModal(){
        this.showModal = "show-modal";
    }

    closeModal(){
        this.showModal = "";
    }
}
