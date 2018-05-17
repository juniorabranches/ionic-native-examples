import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialSharingPage } from './social-sharing';

import { SocialSharing } from '@ionic-native/social-sharing';


@NgModule({
  declarations: [
    SocialSharingPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialSharingPage),
  ],
  providers: [
    SocialSharing
  ]
})
export class SocialSharingPageModule {}
