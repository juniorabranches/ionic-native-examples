import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailComposerPage } from './email-composer';

import { EmailComposer } from '@ionic-native/email-composer';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    EmailComposerPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailComposerPage),
  ],
  providers: [
    EmailComposer,
    Camera
  ]
})
export class EmailComposerPageModule {}
