import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardIOPage } from './cardio';

import { CardIO } from '@ionic-native/card-io';

@NgModule({
  declarations: [
    CardIOPage,
  ],
  imports: [
    IonicPageModule.forChild(CardIOPage),
  ],
  providers: [
    CardIO
  ]
})
export class CardioPageModule {}
