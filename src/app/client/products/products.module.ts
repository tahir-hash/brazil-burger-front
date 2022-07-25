import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CatalogueComponent,
    CardComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
