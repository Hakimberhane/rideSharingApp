import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaquestionsPage } from './faquestions.page';

const routes: Routes = [
  {
    path: '',
    component: FaquestionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaquestionsPageRoutingModule {}
