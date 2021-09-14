import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


 title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  buttonClicked: string = "";

  public ionicNamedColor: string = 'secondary';


 map:any;

 @ViewChild('map', {read:ElementRef, static: false}) mapRef: ElementRef;



  constructor() {}

  ngOnInit() {

  //	this.showMap();

  }


  ionViewDidEnter() {
	
	this.showMap();
}

showMap() {
	const location = new google.maps.Lating(-17.824858,31.053028);
	const options ={
		center:location,
		zoom:15,
		disableDefaultUI:true
	}
	this.map = new google.maps.Map(this.mapRef.nativeElement,options);
}	

}
