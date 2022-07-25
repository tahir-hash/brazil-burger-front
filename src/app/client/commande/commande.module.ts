import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { PanierComponent } from './pages/panier/panier.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { DetailsCmdComponent } from './pages/details-cmd/details-cmd.component';
import { MesCommandesComponent } from './pages/mes-commandes/mes-commandes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CommandeComponent,
    PanierComponent,
    DetailsCmdComponent,
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
