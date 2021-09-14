import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras  } from '@angular/router';
import { ShareddataService } from '../services/shareddata.service';


@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.page.html',
  styleUrls: ['./pickup.page.scss'],
})
export class PickupPage implements OnInit {

 routeData:any;
 private pickups:any;

  constructor(private route: ActivatedRoute,private router: Router,private shareddataService:ShareddataService) {

 
	    this.route.queryParams.subscribe(params => {
			     this.routeData = JSON.parse(params["data"]);
			     this.pickups = this.routeData.pickups;
		  });

  }

  ngOnInit() {
  }

  goToDropOffPage(item) {

       this.shareddataService.setData("departurePicked",item);

	   let navigationExtras: NavigationExtras = {
	     queryParams: {
	        "data": JSON.stringify(this.routeData)
	     }
	   };

	   this.router.navigate(['/dropoff'],  navigationExtras);
  }

}
