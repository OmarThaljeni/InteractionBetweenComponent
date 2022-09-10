import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { LoginInterceptor, LoginInterceptorProvider } from './interceptor/login.interceptor';
import { LoginGuard } from './Guard/login.guard';
import { LogoutGuard } from './Guard/logout.guard';
import { UpdatePersonComponent } from './cvTech/update-person/update-person.component';
import { SearchComponent } from './cvTech/search/search.component';

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
    DetailComponent,
    UpdatePersonComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ROURING,
    FormsModule,
  ],
  providers: [LoginInterceptorProvider,LoginGuard,LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
