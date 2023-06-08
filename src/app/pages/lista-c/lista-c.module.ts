import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ListaCPageRoutingModule } from './lista-c-routing.module';

import { ListaCPage } from './lista-c.page';
import { ComponenteModule } from 'src/app/componente/componente.module';
import { PopInfoComponent } from '../../componente/pop-info/pop-info.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCPageRoutingModule,
    ComponenteModule
  ],
  declarations: [ListaCPage],

})
export class ListaCPageModule {}
