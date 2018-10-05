import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenItemsModalPage } from './open-items-modal';

@NgModule({
  declarations: [
    OpenItemsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenItemsModalPage),
  ],
  exports: [
    OpenItemsModalPage
  ]
})
export class OpenItemsModalPageModule {}
