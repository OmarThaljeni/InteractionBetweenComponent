import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component";
import { CvComponent } from "./cvTech/cv/cv.component";
import { DetailComponent } from "./cvTech/detail/detail.component";
import { LoginComponent } from "./cvTech/login/login.component";
import { RouterSimulationComponent } from "./cvTech/router-simulation/router-simulation.component";
import { StyleComponent } from "./cvTech/style/style.component";
import { UpdatePersonComponent } from "./cvTech/update-person/update-person.component";
import { LoginGuard } from "./Guard/login.guard";
import { LogoutGuard } from "./Guard/logout.guard";

const APP_Routing: Routes = [
    { path: '', redirectTo: '/PlateFormeRecrutement/CV', pathMatch: 'full' },
    {
        path: 'PlateFormeRecrutement',
        children: [
            { path: 'detail/:id', component: DetailComponent, canActivate:[LoginGuard] },
            { path: 'CV', component: CvComponent, canActivate:[LoginGuard] },
            { path: 'StyleCV', component: StyleComponent, canActivate:[LoginGuard] },
            { path: 'simulator', component: RouterSimulationComponent, canActivate:[LoginGuard] },
            { path: 'ajouterCV', component: AddCvComponent, canActivate:[LoginGuard] },
            { path: 'updateCV/:id', component: UpdatePersonComponent, canActivate:[LoginGuard] },
            { path: 'login', component: LoginComponent,  canActivate:[LogoutGuard] },
        ]
    },
]


export const ROURING = RouterModule.forRoot(APP_Routing);

