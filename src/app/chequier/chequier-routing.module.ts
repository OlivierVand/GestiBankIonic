import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChequierPage } from './chequier.page';

const routes: Routes = [
  {
    path: '',
    component: ChequierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChequierPageRoutingModule {}
