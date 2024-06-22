import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaProximaPageRoutingModule } from './tela-proxima-routing.module';

import { TelaProximaPage } from './tela-proxima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaProximaPageRoutingModule
  ],
  declarations: [TelaProximaPage]
})
export class TelaProximaPageModule {}
