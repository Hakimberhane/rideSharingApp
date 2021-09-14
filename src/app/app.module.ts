import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';

import 'firebase/firestore';

import { ShareddataService } from './services/shareddata.service';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

import { RouterModule,Routes } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [FormsModule,ReactiveFormsModule,BrowserModule, RouterModule,IonicModule.forRoot(),
 AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule, 
  AngularFirestoreModule, // Only required for database features
  AngularFireAuthModule, // Only required for auth features,
  AngularFireStorageModule,// Only required for storage features
  AppRoutingModule,HttpClientModule],
  providers: [
    AuthService,
    AuthGuardService,
    ShareddataService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
