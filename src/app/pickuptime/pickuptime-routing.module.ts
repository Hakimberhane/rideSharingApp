import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickuptimePage } from './pickuptime.page';

const routes: Routes = [
  {
    path: '',
    component: PickuptimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickuptimePageRoutingModule {}
