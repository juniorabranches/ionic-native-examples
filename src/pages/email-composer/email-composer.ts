import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EmailComposer } from '@ionic-native/email-composer';
import { Camera } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-email-composer',
  templateUrl: 'email-composer.html',
})
export class EmailComposerPage {
  attach : any;
  constructor(private camera: Camera, private emailComposer: EmailComposer, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailComposerPage');
  }

  changeAttach(){
    this.camera.getPicture(
      {quality: 50,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE}
    ).then(
      (imageData) => {
        this.attach = imageData;
      }
    ).catch((error) => {
      console.log(error)
    });
  }

  sendEmail(){
    this.emailComposer.addAlias('gmail', 'com.google.android.gm');

    let email = {
      to: 'juniorabranches@gmail.com',
      cc: 'other email',
      attachments: this.attach,
      subject: 'Email Composer',
      body: ` An example of send email with Email Composer`,
      isHtml: false,
      app: 'gmail'
    };

    this.emailComposer.open(email);
  }

}
