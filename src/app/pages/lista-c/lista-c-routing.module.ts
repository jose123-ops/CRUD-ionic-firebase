import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCPage } from './lista-c.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCPageRoutingModule {}
