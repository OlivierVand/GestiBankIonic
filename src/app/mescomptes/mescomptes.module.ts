import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MescomptesPageRoutingModule } from './mescomptes-routing.module';

import { MescomptesPage } from './mescomptes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MescomptesPageRoutingModule,
  ],
  declarations: [MescomptesPage],
})
export class MescomptesPageModule {}
