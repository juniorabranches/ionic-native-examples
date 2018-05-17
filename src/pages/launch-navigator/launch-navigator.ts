import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LaunchNavigator } from '@ionic-native/launch-navigator';

@IonicPage()
@Component({
  selector: 'page-launch-navigator',
  templateUrl: 'launch-navigator.html',
})
export class LaunchNavigatorPage {

  constructor(private launchNavigator: LaunchNavigator, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchNavigatorPage');
  }

  navigate() {
    this.launchNavigator.navigate([-23.5709861, -46.6520747]);
  }

}
