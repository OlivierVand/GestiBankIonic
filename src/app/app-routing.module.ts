import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'creercompte',
    loadChildren: () => import('./creercompte/creercompte.module').then( m => m.CreercomptePageModule)
  },
  {
    path: 'conversion',
    loadChildren: () => import('./conversion/conversion.module').then( m => m.ConversionPageModule)
  },
  {
    path: 'mescomptes',
    loadChildren: () => import('./mescomptes/mescomptes.module').then( m => m.MescomptesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
