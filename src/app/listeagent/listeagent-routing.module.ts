import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeagentPage } from './listeagent.page';

const routes: Routes = [
  {
    path: '',
    component: ListeagentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeagentPageRoutingModule {}
