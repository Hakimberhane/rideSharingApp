import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RidedetailPage } from './ridedetail.page';

const routes: Routes = [
  {
    path: '',
    component: RidedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidedetailPageRoutingModule {}
