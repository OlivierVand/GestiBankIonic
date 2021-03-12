import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssurancePage } from './assurance.page';

const routes: Routes = [
  {
    path: '',
    component: AssurancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssurancePageRoutingModule {}
