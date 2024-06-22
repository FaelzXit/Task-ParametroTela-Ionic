import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaProximaPage } from './tela-proxima.page';

const routes: Routes = [
  {
    path: '',
    component: TelaProximaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaProximaPageRoutingModule {}
