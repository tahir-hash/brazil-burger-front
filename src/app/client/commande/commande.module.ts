import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { PanierComponent } from './pages/panier/panier.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MesCommandesComponent } from './pages/mes-commandes/mes-commandes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CommandeComponent,
    PanierComponent,
    MesCommandesComponent,
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    LayoutModule,
    RouterModule
  ]
})
export class CommandeModule { }
