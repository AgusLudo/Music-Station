import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MelodyPage } from './melody.page';

const routes: Routes = [
  {
    path: '',
    component: MelodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MelodyPageRoutingModule {}
