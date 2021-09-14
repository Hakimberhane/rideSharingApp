import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras  } from '@angular/router';
import { ShareddataService } from '../services/shareddata.service';

@Component({
  selector: 'app-dropoff',
  templateUrl: './dropoff.page.html',
  styleUrls: ['./dropoff.page.scss'],
})
export class DropoffPage implements OnInit {

  routeData:any;
  private dropoffs:any;
  
  constructor(private route: ActivatedRoute,private router: Router,private shareddataService:ShareddataService) {

      
	   this.route.queryParams.subscribe(params => {
			this.routeData = JSON.parse(params["data"]);  
			var item = this.shareddataService.getItem("departurePicked");
			var index = this.routeData.pickups.indexOf(item);
            this.dropoffs = this.routeData.pickups.splice(index+1);
	   });
  }

  ngOnInit() {
  }

  goToPickupTime(item) {

     console.log("destination");

      this.shareddataService.setData("destinationPicked",item);
      console.log(this.shareddataService.getData());
	  let navigationExtras: NavigationExtras = {
		     queryParams: {
		        "data": JSON.stringify(this.routeData)
		     }
	   };

	   this.router.navigate(['/pickuptime'],  navigationExtras);
  }


}
