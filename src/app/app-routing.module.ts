import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'connexion',
    loadChildren: () =>
      import('./connexion/connexion.module').then((m) => m.ConnexionPageModule),
  },
  {
    path: 'creercompte',
    loadChildren: () =>
      import('./creercompte/creercompte.module').then(
        (m) => m.CreercomptePageModule
      ),
  },
  {
    path: 'conversion',
    loadChildren: () =>
      import('./conversion/conversion.module').then(
        (m) => m.ConversionPageModule
      ),
  },
  {
    path: 'mescomptes',
    loadChildren: () =>
      import('./mescomptes/mescomptes.module').then(
        (m) => m.MescomptesPageModule
      ),
  },
  {
    path: 'virement',
    loadChildren: () =>
      import('./virement/virement.module').then((m) => m.VirementPageModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
  },
  {
    path: 'listeclientattente',
    loadChildren: () =>
      import('./listeclientattente/listeclientattente.module').then(
        (m) => m.ListeclientattentePageModule
      ),
  },
  {
    path: 'listeagent',
    loadChildren: () =>
      import('./listeagent/listeagent.module').then(
        (m) => m.ListeagentPageModule
      ),
  },
  {
    path: 'agent',
    loadChildren: () =>
      import('./agent/agent.module').then((m) => m.AgentPageModule),
  },
  {
    path: 'agentvalidation',
    loadChildren: () =>
      import('./agentvalidation/agentvalidation.module').then(
        (m) => m.AgentvalidationPageModule
      ),
  },
  {
    path: 'macarte',
    loadChildren: () => import('./macarte/macarte.module').then( m => m.MacartePageModule)
  },
  {
    path: 'iban',
    loadChildren: () => import('./iban/iban.module').then( m => m.IbanPageModule)
  },
  {
    path: 'assurance',
    loadChildren: () => import('./assurance/assurance.module').then( m => m.AssurancePageModule)
  },
  {
    path: 'reglage',
    loadChildren: () => import('./reglage/reglage.module').then( m => m.ReglagePageModule)
  },
  {
    path: 'chequier',
    loadChildren: () => import('./chequier/chequier.module').then( m => m.ChequierPageModule)
  },
  {
    path: 'conseiller',
    loadChildren: () => import('./conseiller/conseiller.module').then( m => m.ConseillerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
