import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickuptimePageRoutingModule } from './pickuptime-routing.module';

import { PickuptimePage } from './pickuptime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickuptimePageRoutingModule
  ],
  declarations: [PickuptimePage]
})
export class PickuptimePageModule {}
