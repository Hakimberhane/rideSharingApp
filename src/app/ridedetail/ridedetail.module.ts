import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RidedetailPageRoutingModule } from './ridedetail-routing.module';

import { RidedetailPage } from './ridedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidedetailPageRoutingModule
  ],
  declarations: [RidedetailPage]
})
export class RidedetailPageModule {}
