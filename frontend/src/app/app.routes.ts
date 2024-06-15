import { Routes } from '@angular/router';
import { PageAccueilComponent } from './vue/PageAccueil/page-accueil.component';
import { PageAccueilPersoComponent } from './vue/PageAccueilPerso/page-accueil-perso.component';

export const routes: Routes = [
    {
        path : '', 
        component: PageAccueilComponent
    },
    {
        path : 'PageAccueilPerso', 
        component: PageAccueilPersoComponent
    }
];
