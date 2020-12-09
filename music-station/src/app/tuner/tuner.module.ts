import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TunerPageRoutingModule } from './tuner-routing.module';

import { TunerPage } from './tuner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TunerPageRoutingModule
  ],
  declarations: [TunerPage]
})
export class TunerPageModule {}
