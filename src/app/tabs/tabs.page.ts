import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  uid:string; 
  userData:any
   constructor(private route: ActivatedRoute,private router: Router) {

   

  }

  ngOnInit() {

  }

}
