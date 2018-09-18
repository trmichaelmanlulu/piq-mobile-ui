import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsModalPage } from './notifications-modal';

@NgModule({
  declarations: [
    NotificationsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsModalPage),
  ],
})
export class NotificationsModalPageModule {}
