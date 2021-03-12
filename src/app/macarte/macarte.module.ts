import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacartePageRoutingModule } from './macarte-routing.module';

import { MacartePage } from './macarte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacartePageRoutingModule
  ],
  declarations: [MacartePage]
})
export class MacartePageModule {}
