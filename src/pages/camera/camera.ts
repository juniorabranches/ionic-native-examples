import { Component } from '@angular/core';
import { Platform, ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  picture = 'assets/imgs/ionicPicture.png';
  constructor(public platform: Platform, public actionsheetCtrl: ActionSheetController, private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
  }

  takePicture(){
    this.camera.getPicture(
      {quality: 50,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL}
    ).then(
      (imageData) => {
        this.picture = 'data:image/jpeg;base64,'+imageData;
      }
    );
  }

  takePictureCamera(){
    this.camera.getPicture(
      {quality: 50,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL}
    ).then(
      (imageData) => {
        this.picture = 'data:image/jpeg;base64,'+imageData;
      }
    ).catch((error) => {
      console.log(error)
    });
  }

  changePicture() {

     const actionsheet = this.actionsheetCtrl.create({
       title: 'Opções de Foto',
       buttons: [
         {
           text: 'Câmera',
           icon: !this.platform.is('ios') ? 'camera' : null,
           handler: () => {
             this.takePictureCamera();
           }
         },
         {
           text: !this.platform.is('ios') ? 'Galeria' : 'Câmera Roll',
           icon: !this.platform.is('ios') ? 'image' : null,
           handler: () => {
             this.takePicture();
           }
         },
         {
           text: 'Cancelar',
           icon: !this.platform.is('ios') ? 'close' : null,
           role: 'destructive',
           handler: () => {
             console.log('the user has cancelled the interaction.');
           }
         }
       ]
     });
     return actionsheet.present();
   }

}
