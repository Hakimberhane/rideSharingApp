import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { IonicModule } from '@ionic/angular';

import { SignupuserPageRoutingModule } from './signupuser-routing.module';

import { SignupuserPage } from './signupuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupuserPageRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // Only required for database features

  ],
  declarations: [SignupuserPage]
})
export class SignupuserPageModule {}
