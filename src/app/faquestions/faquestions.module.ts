import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaquestionsPageRoutingModule } from './faquestions-routing.module';

import { FaquestionsPage } from './faquestions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaquestionsPageRoutingModule
  ],
  declarations: [FaquestionsPage]
})
export class FaquestionsPageModule {}
