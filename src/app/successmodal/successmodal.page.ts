import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-successmodal',
  templateUrl: './successmodal.page.html',
  styleUrls: ['./successmodal.page.scss'],
})
export class SuccessmodalPage implements OnInit {

  constructor(private route: Router,private modalController: ModalController, private navParams: NavParams){ 

  }

  ngOnInit() {
  }

  async goToDetailPage() {
      const onClosedData: string = "Wrapped Up!";
      await this.modalController.dismiss(onClosedData);
      this.route.navigate(['/tripdetailpage']);
  }
  async goToReturnTrip() {
      const onClosedData: string = "Wrapped Up!";
      await this.modalController.dismiss(onClosedData);
      this.route.navigate(['/tripdetailpage']);
  }
  async closeModal() {
      const onClosedData: string = "Wrapped Up!";
      await this.modalController.dismiss(onClosedData);
      this.route.navigate(['/tabs/tabs/tab2']);
  }

}
