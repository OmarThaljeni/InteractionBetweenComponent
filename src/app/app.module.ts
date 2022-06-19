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

@NgModule({
  declarations: [
    AppComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    CvComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
