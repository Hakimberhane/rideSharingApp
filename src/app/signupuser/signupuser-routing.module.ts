import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupuserPage } from './signupuser.page';

const routes: Routes = [
  {
    path: '',
    component: SignupuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupuserPageRoutingModule {}
