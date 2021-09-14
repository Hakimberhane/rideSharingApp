
import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AuthService { 

    userData: any; // Save logged in user data

    private isloggedIn: boolean;
    private userName:string;
 
 constructor(
    public afs: AngularFirestore,public afAuth: AngularFireAuth,
    public router: Router,  
    public ngZone: NgZone) {    
  
          this.isloggedIn=false;
    }
 
    login(username: string, password:string) {
 
        //Assuming users are provided the correct credentials.
        //In real app you will query the database to verify.
        this.isloggedIn=true;
        this.userName=username;
        return of(this.isloggedIn);
    }
 
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
 
    isAdminUser():boolean {
        if (this.userName=='Admin') {
            return true; 
        }
        return false;
    }
    
    logoutUser(): void{
        this.isloggedIn = false;
    }
 
} 
 