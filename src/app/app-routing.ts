import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cvTech/cv/cv.component";
import { RouterSimulationComponent } from "./cvTech/router-simulation/router-simulation.component";
import { StyleComponent } from "./cvTech/style/style.component";

const APP_Routing: Routes = [
    { path: '', redirectTo: '/PlateFormeRecrutement/CV', pathMatch: 'full' },
    {
        path: 'PlateFormeRecrutement',
        children: [
            { path: 'CV', component: CvComponent },
            { path: 'StyleCV', component: StyleComponent },
            { path: 'simulator', component: RouterSimulationComponent },
        ]
    },
]


export const ROURING = RouterModule.forRoot(APP_Routing);

