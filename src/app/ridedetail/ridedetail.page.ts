import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SuccessmodalPage } from '../successmodal/successmodal.page';
import { Router, ActivatedRoute, ParamMap, NavigationExtras  } from '@angular/router';
import { RouteserviceService } from '../services/routeservice.service';


//declare var google:any;


@Component({
  selector: 'app-ridedetail',
  templateUrl: './ridedetail.page.html',
  styleUrls: ['./ridedetail.page.scss'],
})
export class RidedetailPage implements OnInit {


 title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  buttonClicked: string = "";

  public ionicNamedColor: string = 'secondary';

  map:any;
  routeData:any;
  numberOfSeatsBooked:any;
//@ViewChild('map', {read:ElementRef, static: false}) mapRef: ElementRef;

constructor(private modalController: ModalController,private route: ActivatedRoute,private router: Router,private routeserviceService:RouteserviceService ) {


   this.route.queryParams.subscribe(params => {
        this.routeData = JSON.parse(params["data"]);          
        console.log("detail page data"); 
        console.log(this.routeData); 
   });
 }

  ngOnInit() {
  }

  bookTrip() {
  
    this.routeserviceService.saveBookingData(this.routeData);
    this.openModal() 
  }

  async openModal() {

    const sucModal = await this.modalController.create({
      component: SuccessmodalPage,
      cssClass:'my-custom-modal-css',
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      }
    });
  return await sucModal.present();

}

ionViewDidEnter() {
  
  //this.showMap();
}

showMap() {
  //const location = new google.maps.Lating(-17.824858,31.053028);
  const options ={
    center:location,
    zoom:15,
    disableDefaultUI:true
  }
//  this.map = new google.maps.Map(this.mapRef.nativeElement,options);
} 

addSeats1(seatButton) {
  this.buttonClicked = seatButton;

}

addSeats(element,btnLabel,numberOfSeats){
 
  this.buttonClicked = btnLabel;
  this.routeData.numberOfSeatsBooked = numberOfSeats;
  var fare:number = +this.routeData.fare;
  var total = fare * numberOfSeats;
  this.routeData.total = total.toString();
  console.log(this.routeData);
}


}
