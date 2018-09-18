import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { NotificationPopoverPage } from '../_popovers/notification-popover/notification-popover';
import { NotificationsModalPage } from './../_modals/notifications-modal/notifications-modal';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(NotificationPopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  presentNotificationsModal() {
    let notificationsModal = this.modalCtrl.create(NotificationsModalPage);
    notificationsModal.present();
  }

}
