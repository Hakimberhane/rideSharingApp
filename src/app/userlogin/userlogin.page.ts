import { Component, OnInit,NgModule } from '@angular/core'; 
import { FormGroup, FormBuilder,FormsModule,ReactiveFormsModule,FormControl,Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from '@angular/fire/firestore';

import { Router, ActivatedRoute, ParamMap, NavigationExtras  } from '@angular/router';
import { ShareddataService } from '../services/shareddata.service';
import firebase from 'firebase/app';
import { Usrtdata } from '../models/Usrtdata.model';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.page.html',
  styleUrls: ['./userlogin.page.scss'],
})
export class UserloginPage implements OnInit {

  isLoggedIn:Boolean;
  email:string;
  password:string;
  userData:any;
  usrtdata:Usrtdata;


  loginForm = new FormGroup({
     phoneNumber: new FormControl('', [Validators.required, Validators.email]),
     password: new FormControl('', [Validators.required,Validators.minLength(6)]),

  });


  constructor(private angularFireAuth:AngularFireAuth,private angularFirestore:AngularFirestore, private router: Router, private activatedroute: ActivatedRoute,
  private shareddataService:ShareddataService ) {   

          this.usrtdata = new Usrtdata();


  }
  ngOnInit() {
  }

SignIn() {

      var email = this.loginForm.controls.phoneNumber.value + "@mydomain.com";
      var password = this.loginForm.controls.password.value;

      this.angularFireAuth.signInWithEmailAndPassword(email, this.loginForm.get("password").value)
        .then(res => {
	          this.shareddataService.setData("uid",firebase.auth().currentUser.uid);
	          this.getUserData(firebase.auth().currentUser.uid).subscribe(result => {
				 var usrtdata:any = result[0];
				 console.log('You are Successfully signed in!');
                 this.shareddataService.setData("name",usrtdata.name);
                 this.shareddataService.setData("phoneNumber",usrtdata.phoneNumber);

	             console.log(this.shareddataService.getData());		
	             	 this.router.navigate(['/tabs']);
		 
			   });
        }).catch(error => {
          window.alert(error.message)
      });

     this.angularFireAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        } else {
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
      })
    

  }

  getUserData(uid) {
  	
    return this.angularFirestore.collection('Users',ref => ref.where('useruid', '==', uid)).valueChanges();

  }

 public setData(usrtdata) {
  	
                 this.shareddataService.setData("uid",usrtdata.useruid);
	             this.shareddataService.setData("name",usrtdata.name);
	             this.shareddataService.setData("phoneNumber",usrtdata.phoneNumber);
                 console.log(this.shareddataService.getData());
  }


}

