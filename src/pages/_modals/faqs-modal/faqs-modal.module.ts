import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaqsModalPage } from './faqs-modal';

@NgModule({
  declarations: [
    FaqsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FaqsModalPage),
  ],
  exports: [
    FaqsModalPage
  ]
})
export class FaqsModalPageModule {}
