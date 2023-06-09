import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'lista-c',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'lista-c',
    loadChildren: () => import('./pages/lista-c/lista-c.module').then( m => m.ListaCPageModule)
  },
  {
    path: 'agregar-c',
    loadChildren: () => import('./pages/agregar-c/agregar-c.module').then( m => m.AgregarCPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
