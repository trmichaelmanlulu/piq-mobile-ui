import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsfeedModalPage } from './newsfeed-modal';

@NgModule({
  declarations: [
    NewsfeedModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsfeedModalPage),
  ],
})
export class NewsfeedModalPageModule {}
