import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConseillerPageRoutingModule } from './conseiller-routing.module';

import { ConseillerPage } from './conseiller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConseillerPageRoutingModule
  ],
  declarations: [ConseillerPage]
})
export class ConseillerPageModule {}
