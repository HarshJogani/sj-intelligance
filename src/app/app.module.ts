import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParicalsComponent } from './paricals/paricals.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProvideComponent } from './provide/provide.component';
import { CrouselComponent } from './crousel/crousel.component';
import { FillterComponent } from "./fillter/fillter.component";

@NgModule({
  declarations: [
    AppComponent,
    ParicalsComponent,
    NavbarComponent,
    AboutComponent,
    ProvideComponent,
    CrouselComponent,
    FillterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
