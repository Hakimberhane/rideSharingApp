import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faquestions',
  templateUrl: './faquestions.page.html',
  styleUrls: ['./faquestions.page.scss'],
})
export class FaquestionsPage implements OnInit {

   
 information: any[];
 automaticClose = false;
 numberOfProducts:number;
 products:any[];
 total:number;

  constructor(private http: HttpClient) {
    this.http.get('assets/information.json').subscribe(res => {


      this.information = res['items'];
      console.log(this.information);
      this.information[0].open = false;
    });
  }

  ionViewWillEnter(){
      
  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open;

    if (this.automaticClose && this.information[index].open) {
      this.information
      .filter((item, itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex) {
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
  }

   ngOnInit() {
  }


}