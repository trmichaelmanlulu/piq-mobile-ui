import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentModalPage } from './document-modal';

@NgModule({
  declarations: [
    DocumentModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentModalPage),
  ],
  exports: [
    DocumentModalPage
  ]
})
export class DocumentModalPageModule {}
