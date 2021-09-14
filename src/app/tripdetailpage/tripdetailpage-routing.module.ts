import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripdetailpagePage } from './tripdetailpage.page';

const routes: Routes = [
  {
    path: '',
    component: TripdetailpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripdetailpagePageRoutingModule {}
