import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrenttripPage } from './currenttrip.page';

const routes: Routes = [
  {
    path: '',
    component: CurrenttripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrenttripPageRoutingModule {}
