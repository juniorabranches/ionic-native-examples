import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-social-sharing',
  templateUrl: 'social-sharing.html',
})
export class SocialSharingPage {
  openMenu = false;
  constructor(private socialSharing: SocialSharing, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialSharingPage');
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  whatsappShare() {
    this.socialSharing.shareViaWhatsApp('Social Sharing from Ionic Native .. Amazing',
      null,
      'https://github.com/juniorabranches/ionic-native-examples')
      .then(() => {
        console.log('great')
      },
      () => {
        alert("Sorry, could not share, make sure you have Whatsapp installed on your device ...");
      })
    }

    twitterShare() {
      this.socialSharing.shareViaTwitter('Social Sharing from Ionic Native .. Amazing',
      null,
      'https://github.com/juniorabranches/ionic-native-examples')
        .then(() => {
          console.log('great')
        },
        () => {
          alert("Sorry, could not share, make sure you have Twitter installed on your device ...");
       })
    }

    facebookShare() {
      this.socialSharing.shareViaFacebook('Social Sharing from Ionic Native .. Amazing',
      null,
      'https://github.com/juniorabranches/ionic-native-examples')
        .then(() => {
          console.log('great')
        },
        () => {
          alert("Sorry, could not share, make sure you have Facebook installed on your device ...");
        })
    }

    instagramShare() {
      this.socialSharing.shareViaInstagram('Social Sharing from Ionic Native .. Amazing',
      null)
        .then(() => {
          console.log('great')
        },
        () => {
          alert("Sorry, could not share, make sure you have Instagram installed on your device ...");
        })
    }

}
