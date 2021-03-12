import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IbanPage } from './iban.page';

const routes: Routes = [
  {
    path: '',
    component: IbanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IbanPageRoutingModule {}
