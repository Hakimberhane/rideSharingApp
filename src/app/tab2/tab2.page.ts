import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationExtras  } from '@angular/router';
import { RouteserviceService } from '../services/routeservice.service';
import { ShareddataService } from '../services/shareddata.service';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

 routesData:any[]=[];
 items = [];
 pageOfItems: Array<any>;

 uid:string;
 userData:any;
 constructor(private route: ActivatedRoute,private router: Router,private routeserviceService:RouteserviceService,private shareddataService:ShareddataService) {

   
     this.routeserviceService.getRouteslist().subscribe(jsonData =>{
        this.routesData = jsonData;
        console.log("fare changed");

        console.log(this.routesData);
        this.items = this.routesData.map((x, i) => ({id: x.id,departureaddress: x.departureaddress,destinationaddress: x.destinationaddress}));


      });
 
  }

  ngOnInit() {
  }

 
 onChangePage(pageOfItems: Array<any>) {
        // update current page of items
       this.pageOfItems = pageOfItems;   
  }

  goToPickupPage(item){


     console.log("iiitems");
     console.log(item);
	   let navigationExtras: NavigationExtras = {
	     queryParams: {
	        "data": JSON.stringify(item)
	     }
	   };

	    this.router.navigate(['/pickup'],  navigationExtras);
	 
  }

}
