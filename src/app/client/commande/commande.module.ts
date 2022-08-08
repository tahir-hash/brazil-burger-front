import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { PanierComponent } from './pages/panier/panier.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MesCommandesComponent } from './pages/mes-commandes/mes-commandes.component';
import { RouterModule } from '@angular/router';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    CommandeComponent,
    PanierComponent,
    MesCommandesComponent,
    EmptyCartComponent,
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    LayoutModule,
    RouterModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class CommandeModule { }
