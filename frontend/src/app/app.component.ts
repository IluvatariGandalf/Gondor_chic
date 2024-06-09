import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HorizontalNavBarComponent } from './common/horizontal-nav-bar/horizontal-nav-bar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HorizontalNavBarComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Gondor Chic';
}
