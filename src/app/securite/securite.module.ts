import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuriteRoutingModule } from './securite-routing.module';
import { SecuriteComponent } from './securite.component';
import { LoginComponent } from './pages/login/login.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    SecuriteComponent,
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    SecuriteRoutingModule,
    LayoutModule
  ],
  exports: [
    LayoutModule
  ]
})
export class SecuriteModule { }
