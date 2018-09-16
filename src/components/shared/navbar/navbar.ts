import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { MyPropertiesModalPage } from '../../../pages/_modals/my-properties-modal/my-properties-modal';

/**
 * Generated class for the NavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {
  @Input() activePage: string;

  constructor(public modalCtrl: ModalController) {
  }

  presentPropertiesModal() {
    let profileModal = this.modalCtrl.create(MyPropertiesModalPage);
    profileModal.present();
  }

}
