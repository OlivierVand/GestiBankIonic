import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacartePage } from './macarte.page';

const routes: Routes = [
  {
    path: '',
    component: MacartePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacartePageRoutingModule {}
