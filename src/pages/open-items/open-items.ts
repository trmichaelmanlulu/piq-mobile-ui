import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { OpenItemsModalPage } from './../_modals/open-items-modal/open-items-modal';

/**
 * Generated class for the OpenItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-items',
  templateUrl: 'open-items.html',
})
export class OpenItemsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  presentOpenItemsModal() {
    let openItemsModal = this.modalCtrl.create(OpenItemsModalPage);
    openItemsModal.present();
  }

}
