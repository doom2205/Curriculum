import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { app_routing } from './app.router';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { FuentesComponent } from './components/fuentes/fuentes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HabilidadesComponent,
    FuentesComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
