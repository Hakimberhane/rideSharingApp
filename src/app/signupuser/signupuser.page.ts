import { Component, OnInit } from '@angular/core';
import { WindowService } from '../services/window.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//import * as firebase from 'firebase/app';

//import {firebase} from '@firebase/app';
//import '@firebase/firestore';

//import { firebase } from '@firebase/app'
//import '@firebase/auth'
//import * as firebase from 'firebase';

//import firebase from "firebase/app";
//import "firebase/auth";
//import "firebase/firestore";
import firebase from 'firebase/app';


export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.area + this.prefix + this.line
    return `+${num}`
  }

}


@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.page.html',
  styleUrls: ['./signupuser.page.scss'],
})
export class SignupuserPage implements OnInit {

  windowRef: any;
  phoneNumber = new PhoneNumber()
  verificationCode: string;
  user: any;

  initialuserid: Number = 0;

   signupForm = new FormGroup({
     phoneNumber: new FormControl('', [Validators.required]),
     name: new FormControl('', [Validators.required]),
     password: new FormControl('', [Validators.required,Validators.minLength(6)]),

  });

  constructor(private angularFireAuth:AngularFireAuth,private angularFirestore:AngularFirestore, private win: WindowService,private router: Router, private activatedroute: ActivatedRoute) {
  
  // this.angularFirestore.collection("DatabaseInitials").doc("initials").valueChanges().subscribe(res => { 
        // this.initialuserid = res.initialUserId;
        // this.initialuserid = this.initialuserid + 1;
   // });

   }

  ngOnInit() {

    var user =    this.angularFireAuth.currentUser;
    if (user) {
     alert("I am logged in "+ user);
    } else {
     alert("not logged in");
    }    

 //   this.windowRef = this.win.windowRef;
  //  this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  //  this.windowRef.recaptchaVerifier
   //               .render()
    //              .then( widgetId => {

         //           this.windowRef.recaptchaWidgetId = widgetId
  //  });
  }


  sendLoginCode() {

   // const appVerifier = this.windowRef.recaptchaVerifier;

  //  this.windowRef = this.win.windowRef;
   // this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    //const num = this.phoneNumber.e164;

    //firebase.auth()
       //     .signInWithPhoneNumber(num, appVerifier)
        //    .then(result => {

         //       this.windowRef.confirmationResult = result;

        //    })
         //   .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


  SignUp() {

      var email = this.signupForm.controls.phoneNumber.value + "@mydomain.com";
      var password = this.signupForm.controls.password.value;

      this.signupForm.removeControl('password'); 

     this.angularFireAuth
      .createUserWithEmailAndPassword(email,password)
       .then(result => {
          console.log("user uid is");
          console.log(firebase.auth().currentUser.uid);
          this.signupForm.addControl('useruid', new FormControl(firebase.auth().currentUser.uid, Validators.required));

           this.angularFirestore.collection("Users").add(this.signupForm.value).
                  catch(error => {
                       console.log('Something is wrong storing data in Users table:', error.message);
                  });
                  console.log('You are Successfully signed up!');
         })
         .catch(error => {
             console.log('Something is wrong:', error.message);
         });

      this.angularFirestore.collection("DatabaseInitials").doc("initials").update({initialUserId: this.initialuserid}).catch(function(error) { console.error("Error writing document: ", error); });
      this.router.navigate(['/tabs']);
   }



 phoneLogin() {

        alert("test 1");
     //var recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
     // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
     // 'size': 'invisible',});
     // this.windowRef = this.win.windowRef;
     // this.windowRef.recaptchaVerifier = new firebase.RecaptchaVerifier('recaptcha-container');
   const appVerifier = (window as any).recaptchaVerifier;
  //  alert(appVerifier);
     var phoneNumber = "+1 650-555-3434";
     alert("test 2");

const applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    firebase.auth().signInWithPhoneNumber(phoneNumber, applicationVerifier)
      .then((confirmationResult) => {
         alert("successful");
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log(confirmationResult);
      }).catch((error) => {
        // Error; SMS not sent
        // ...
      });
  }

  }
