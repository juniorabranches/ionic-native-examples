import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmobFreePage } from './admob-free';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    AdmobFreePage,
  ],
  imports: [
    IonicPageModule.forChild(AdmobFreePage),
  ],
  providers: [
      AdMobFree
  ]
})
export class AdmobFreePageModule {}
