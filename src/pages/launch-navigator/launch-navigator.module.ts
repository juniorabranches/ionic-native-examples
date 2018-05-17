import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchNavigatorPage } from './launch-navigator';

import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    LaunchNavigatorPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchNavigatorPage),
  ],
  providers: [
    LaunchNavigator
  ]
})
export class LaunchNavigatorPageModule {}
