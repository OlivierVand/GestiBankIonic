import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeclientattentePage } from './listeclientattente.page';

const routes: Routes = [
  {
    path: '',
    component: ListeclientattentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeclientattentePageRoutingModule {}
