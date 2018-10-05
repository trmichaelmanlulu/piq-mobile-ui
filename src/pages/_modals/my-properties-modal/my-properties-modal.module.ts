import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPropertiesModalPage } from './my-properties-modal';

@NgModule({
  declarations: [
    MyPropertiesModalPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPropertiesModalPage),
  ],
  exports: [
    MyPropertiesModalPage
  ]
})
export class MyPropertiesModalPageModule {}
