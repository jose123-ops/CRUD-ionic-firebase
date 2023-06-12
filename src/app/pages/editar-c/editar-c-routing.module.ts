import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCPage } from './editar-c.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCPageRoutingModule {}
