import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardingpassPageRoutingModule } from './boardingpass-routing.module';

import { BoardingpassPage } from './boardingpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardingpassPageRoutingModule
  ],
  declarations: [BoardingpassPage]
})
export class BoardingpassPageModule {}
