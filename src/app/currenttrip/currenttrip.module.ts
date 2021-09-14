import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrenttripPageRoutingModule } from './currenttrip-routing.module';

import { CurrenttripPage } from './currenttrip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrenttripPageRoutingModule
  ],
  declarations: [CurrenttripPage]
})
export class CurrenttripPageModule {}
