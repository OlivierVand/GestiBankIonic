import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChequierPageRoutingModule } from './chequier-routing.module';

import { ChequierPage } from './chequier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChequierPageRoutingModule
  ],
  declarations: [ChequierPage]
})
export class ChequierPageModule {}
