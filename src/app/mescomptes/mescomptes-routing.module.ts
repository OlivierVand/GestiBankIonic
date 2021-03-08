import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MescomptesPage } from './mescomptes.page';

const routes: Routes = [
  {
    path: '',
    component: MescomptesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MescomptesPageRoutingModule {}
