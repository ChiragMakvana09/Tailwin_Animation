import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: "navbar",
        component : NavBarComponent
    },
    {
        path: "landingPage",
        component : LandingPageComponent
    }
];
