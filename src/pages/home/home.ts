import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MyPropertiesModalPage } from '../../pages/_modals/my-properties-modal/my-properties-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  homeSegment = 'newsfeed';

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  presentPropertiesModal() {
    let profileModal = this.modalCtrl.create(MyPropertiesModalPage);
    profileModal.present();
  }

}
