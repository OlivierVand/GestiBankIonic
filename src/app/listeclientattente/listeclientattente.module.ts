import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeclientattentePageRoutingModule } from './listeclientattente-routing.module';

import { ListeclientattentePage } from './listeclientattente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeclientattentePageRoutingModule
  ],
  declarations: [ListeclientattentePage]
})
export class ListeclientattentePageModule {}
