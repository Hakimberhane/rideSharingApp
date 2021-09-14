import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './services/auth-guard.service';
import { HomePage } from './home/home.page';


const routes: Routes = [

 {
    path: 'signupuser',
    loadChildren: () => import('./signupuser/signupuser.module').then( m => m.SignupuserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'userlogin',
    loadChildren: () => import('./userlogin/userlogin.module').then( m => m.UserloginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate : [AuthGuardService] 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'pickup',
    loadChildren: () => import('./pickup/pickup.module').then( m => m.PickupPageModule)
  },
  {
    path: 'dropoff',
    loadChildren: () => import('./dropoff/dropoff.module').then( m => m.DropoffPageModule)
  },
  {
    path: 'pickuptime',
    loadChildren: () => import('./pickuptime/pickuptime.module').then( m => m.PickuptimePageModule)
  },
  {
    path: 'ridedetail',
    loadChildren: () => import('./ridedetail/ridedetail.module').then( m => m.RidedetailPageModule)
  },
  {
    path: 'successmodal',
    loadChildren: () => import('./successmodal/successmodal.module').then( m => m.SuccessmodalPageModule)
  },
  {
    path: 'boardingpass',
    loadChildren: () => import('./boardingpass/boardingpass.module').then( m => m.BoardingpassPageModule)
  },
  {
    path: 'tripdetailpage',
    loadChildren: () => import('./tripdetailpage/tripdetailpage.module').then( m => m.TripdetailpagePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'currenttrip',
    loadChildren: () => import('./currenttrip/currenttrip.module').then( m => m.CurrenttripPageModule)
  },
  {
    path: 'faquestions',
    loadChildren: () => import('./faquestions/faquestions.module').then( m => m.FaquestionsPageModule)
  },
  {
    path: 'profileedit',
    loadChildren: () => import('./profileedit/profileedit.module').then( m => m.ProfileeditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
