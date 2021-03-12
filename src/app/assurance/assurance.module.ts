import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssurancePageRoutingModule } from './assurance-routing.module';

import { AssurancePage } from './assurance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssurancePageRoutingModule
  ],
  declarations: [AssurancePage]
})
export class AssurancePageModule {}
