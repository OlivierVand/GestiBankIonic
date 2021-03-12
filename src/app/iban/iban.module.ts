import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IbanPageRoutingModule } from './iban-routing.module';

import { IbanPage } from './iban.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IbanPageRoutingModule
  ],
  declarations: [IbanPage]
})
export class IbanPageModule {}
