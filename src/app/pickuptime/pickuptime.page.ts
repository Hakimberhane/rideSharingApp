import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras  } from '@angular/router';
import { ShareddataService } from '../services/shareddata.service';

@Component({
  selector: 'app-pickuptime',
  templateUrl: './pickuptime.page.html',
  styleUrls: ['./pickuptime.page.scss'],
})
export class PickuptimePage implements OnInit {

  routeData:any;
  dayswithhrs = [];

  items = [];

  buttonColor: string = 'blue'; //Default Color
  buttonClicked: string = "";

  selectedTime = "";
  selectedDay  = "";

  pickupTime:string;
  pickupDate:string;

 constructor(private route: ActivatedRoute,private router: Router,private shareddataService:ShareddataService) {

      this.route.queryParams.subscribe(params => {

            this.routeData = JSON.parse(params["data"]);         
            console.log(this.routeData); 

           if(this.routeData.mondayHrs.myarraylist) {

             this.routeData.mondayHrs.day = "Mon";
             this.dayswithhrs.push(this.routeData.mondayHrs);
           };
           if(this.routeData.tuesdayHrs.myarraylist) {

             this.routeData.tuesdayHrs.day = "Tue";
             this.dayswithhrs.push(this.routeData.tuesdayHrs);
           }; 
           if(this.routeData.wednesdayHrs.myarraylist) {

             this.routeData.wednesdayHrs.day = "Wed";
             this.dayswithhrs.push(this.routeData.wednesdayHrs);
           } ;    
           if(this.routeData.thursdayHrs.myarraylist) {

             this.routeData.thursdayHrs.day = "Thu";
             this.dayswithhrs.push(this.routeData.thursdayHrs);
           };      
           if(this.routeData.fridayHrs.myarraylist) {

             this.routeData.fridayHrs.day = "Fri";
             this.dayswithhrs.push(this.routeData.fridayHrs);
           };   
           if(this.routeData.satdayHrs.myarraylist) {

             this.routeData.satdayHrs.day = "Sat";
             this.dayswithhrs.push(this.routeData.satdayHrs);
           };       
      });
  }

  ngOnInit() {

  }

  pickTime(element) {
  	
    this.selectedTime = this.selectedDay + " " + element.innerText;
    this.pickupTime = element.innerText;
  }

  listAvailableTimes(element,dayOfTheWeek){

        this.buttonClicked = dayOfTheWeek;

        if(dayOfTheWeek == "Mon") {
          this.items = this.routeData.mondayHrs.myarraylist;
          this.selectedDay = "Mon";
          this.pickupDate = this.routeData.mondayHrs.scheduleDate;
        }
        if(dayOfTheWeek == "Tue") {
           this.items = this.routeData.tuesdayHrs.myarraylist;
           this.selectedDay = "Tue";
           this.pickupDate = this.routeData.tuesdayHrs.scheduleDate;
        }  
        if(dayOfTheWeek == "Wed") {
           this.items = this.routeData.wednesdayHrs.myarraylist;
           this.selectedDay = "Wed";
           this.pickupDate = this.routeData.wednesdayHrs.scheduleDate;
        }
        if(dayOfTheWeek == "Thu") {
           this.items = this.routeData.thursdayHrs.myarraylist;
           this.selectedDay = "Thu";
           this.pickupDate = this.routeData.thursdayHrs.scheduleDate;
        }   
        if(dayOfTheWeek == "Fri") {
           this.items = this.routeData.fridayHrs.myarraylist;
           this.selectedDay = "Fri";
           this.pickupDate = this.routeData.fridayHrs.scheduleDate;
        }    
        if(dayOfTheWeek == "Sat") {
           this.items = this.routeData.satdayHrs.myarraylist;
           this.selectedDay = "Sat";
           this.pickupDate = this.routeData.satdayHrs.scheduleDate;
        }   
   
  }

  goToDetailPage() {

   var usrtData =  this.shareddataService.getData();

    var dateBooked = new Date();
    var dateBookedStr = dateBooked.toLocaleDateString();

     var bookedObj:any = {
         routeId:this.routeData.routeId,
         subrouteno:this.routeData.subrouteno,
         driverId:this.routeData.driverId,
         departure:this.routeData.departure,
         destination:this.routeData.destination,
         fare:this.routeData.fare,
         pickupDay:this.selectedDay,
         pickupDate:this.pickupDate,
         pickupTime:this.pickupTime,
         dateBooked:dateBookedStr,
         userName:usrtData["name"],
         userPhoneNumber:usrtData["phoneNumber"],
         pickup:usrtData["departurePicked"],
         dropoff:usrtData["destinationPicked"],

     };

     console.log("booked data is");
     console.log(bookedObj);
  	
     let navigationExtras: NavigationExtras = {
       queryParams: {
          "data": JSON.stringify(bookedObj)
       }
     };

     this.router.navigate(['/ridedetail'],  navigationExtras);
  }
}


