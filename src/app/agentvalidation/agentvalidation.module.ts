import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentvalidationPageRoutingModule } from './agentvalidation-routing.module';

import { AgentvalidationPage } from './agentvalidation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentvalidationPageRoutingModule
  ],
  declarations: [AgentvalidationPage]
})
export class AgentvalidationPageModule {}
