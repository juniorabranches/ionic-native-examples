import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CardIO } from '@ionic-native/card-io';

@IonicPage()
@Component({
  selector: 'page-cardio',
  templateUrl: 'cardio.html',
})
export class CardIOPage {

  constructor(private cardIO: CardIO, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardioPage');
  }

  scan() {
    this.cardIO.canScan()
      .then(
        (res: boolean) => {
          if(res){
            let options = {
              requireExpiry: true,
              requireCVV: false,
              requirePostalCode: false
            };
            this.cardIO.scan(options);
          }
        }
      );
  }

}
