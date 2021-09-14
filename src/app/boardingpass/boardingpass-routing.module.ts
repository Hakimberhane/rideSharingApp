import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardingpassPage } from './boardingpass.page';

const routes: Routes = [
  {
    path: '',
    component: BoardingpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardingpassPageRoutingModule {}
