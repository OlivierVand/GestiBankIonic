import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeagentPageRoutingModule } from './listeagent-routing.module';

import { ListeagentPage } from './listeagent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeagentPageRoutingModule
  ],
  declarations: [ListeagentPage]
})
export class ListeagentPageModule {}
