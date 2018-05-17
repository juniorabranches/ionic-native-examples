import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-admob-free',
  templateUrl: 'admob-free.html',
})
export class AdmobFreePage {

  constructor(private admobFree: AdMobFree, public navCtrl: NavController, public navParams: NavParams) {
    const bannerConfig: AdMobFreeBannerConfig = {
     bannerAtTop: false,
     id: 'ca-app-pub-5867967129391518/4576815120', /* YOUR BANNER ID IN ADMOB SITE */
     isTesting: false,
     autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here

      })
      .catch(e => console.log(e));
  }
}
