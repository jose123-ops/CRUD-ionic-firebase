import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { AgregarCPageRoutingModule } from './agregar-c-routing.module';

import { AgregarCPage } from './agregar-c.page';
import { ComponenteModule } from 'src/app/componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarCPageRoutingModule,
    ComponenteModule,
   
  ],
  declarations: [AgregarCPage]
})
export class AgregarCPageModule {}
