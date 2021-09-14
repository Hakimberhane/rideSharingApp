import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RouteserviceService {


  constructor(private angularFirestore:AngularFirestore) {}

  getRouteslist() {
      return this.angularFirestore.collection('RouteDriverRelationship').snapshotChanges()
          .pipe(map(actions => actions.map(a => {
            const object = a.payload.doc.data();
             // object.id = a.payload.doc['id']
             console.log("ddddd");
              console.log(object);
              return object;
          })));
   }

  saveBookingData(bookingObj) {
  	
	    var docRef = this.angularFirestore.collection("BookedTripTable").add(bookingObj);
	    docRef.then((data) => {
	            console.log("You Successfuly  booked a trip");
	        })
	        .catch(function(e) {
	            console.log(e);
	     })
  }

}
