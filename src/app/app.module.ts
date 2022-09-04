import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { NavbarComponent } from './cvTech/navbar/navbar.component';
import { FooterComponent } from './cvTech/footer/footer.component';
import { StyleComponent } from './cvTech/style/style.component';
import { HighlightDirective } from './cvTech/directive/highlight.directive';
import { RainBowDirective } from './cvTech/directive/rain-bow.directive';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { ROURING } from './app-routing';
import { RouterSimulationComponent } from './cvTech/router-simulation/router-simulation.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { LoginComponent } from './cvTech/login/login.component';
import { DetailComponent } from './cvTech/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    CvComponent,
    NavbarComponent,
    FooterComponent,
    StyleComponent,
    HighlightDirective,
    RainBowDirective,
    EmbaucheComponent,
    RouterSimulationComponent,
    AddCvComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROURING,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
