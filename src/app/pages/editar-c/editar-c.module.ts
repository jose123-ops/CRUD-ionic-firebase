import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCPageRoutingModule } from './editar-c-routing.module';

import { EditarCPage } from './editar-c.page';
import { ComponenteModule } from 'src/app/componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCPageRoutingModule,
    ComponenteModule
  ],
  declarations: [EditarCPage]
})
export class EditarCPageModule {}
