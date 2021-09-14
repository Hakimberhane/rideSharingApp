import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripdetailpagePageRoutingModule } from './tripdetailpage-routing.module';

import { TripdetailpagePage } from './tripdetailpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripdetailpagePageRoutingModule
  ],
  declarations: [TripdetailpagePage]
})
export class TripdetailpagePageModule {}
