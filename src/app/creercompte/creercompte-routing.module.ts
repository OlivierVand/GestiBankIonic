import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CreercomptePage } from './creercompte.page';

const routes: Routes = [
  {
    path: '',
    component: CreercomptePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
})
export class CreercomptePageRoutingModule {}
