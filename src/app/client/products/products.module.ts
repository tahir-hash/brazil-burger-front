import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { CountComponent } from './components/count/count.component';
import { CompositionComponent } from './components/composition/composition.component';
import { RouterModule } from '@angular/router';
import { AddCartComponent } from './components/add-cart/add-cart.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CatalogueComponent,
    CardComponent,
    DetailsComponent,
    CountComponent,
    CompositionComponent,
    AddCartComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule
  ]
})
export class ProductsModule { }
