import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MelodyPageRoutingModule } from './melody-routing.module';

import { MelodyPage } from './melody.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MelodyPageRoutingModule
  ],
  declarations: [MelodyPage]
})
export class MelodyPageModule {}
