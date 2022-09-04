import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { DetailComponent } from "./cvTech/detail/detail.component";
import { LoginComponent } from "./cvTech/login/login.component";
import { RouterSimulationComponent } from "./cvTech/router-simulation/router-simulation.component";
import { StyleComponent } from "./cvTech/style/style.component";

const APP_Routing: Routes = [
    { path: '', redirectTo: '/PlateFormeRecrutement/CV', pathMatch: 'full' },
    {
        path: 'PlateFormeRecrutement',
        children: [
            { path: 'detail/:id', component: DetailComponent },
            { path: 'CV', component: CvComponent },
            { path: 'StyleCV', component: StyleComponent },
            { path: 'simulator', component: RouterSimulationComponent },
            { path: 'ajouterCV', component: AddCvComponent },
            { path: 'login', component: LoginComponent },
        ]
    },
]


export const ROURING = RouterModule.forRoot(APP_Routing);

