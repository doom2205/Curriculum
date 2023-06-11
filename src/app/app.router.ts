import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { FuentesComponent } from './components/fuentes/fuentes.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'lenguaje', component: HabilidadesComponent },
    { path: 'fuentes', component: FuentesComponent },
    { path: '**',pathMatch:'full' , redirectTo:'home' },

];

export const app_routing = RouterModule.forRoot(routes,{useHash:true})
