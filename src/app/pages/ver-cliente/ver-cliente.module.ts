import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VerClientePageRoutingModule } from './ver-cliente-routing.module';

import { VerClientePage } from './ver-cliente.page';
import { ComponenteModule } from 'src/app/componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerClientePageRoutingModule,


  ],



  declarations: [VerClientePage]
})
export class VerClientePageModule {}
