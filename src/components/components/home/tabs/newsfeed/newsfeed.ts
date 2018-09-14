import { ModalController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NewsfeedItemPage } from './../../../../../pages/_modals/newsfeed-item/newsfeed-item';

/**
 * Generated class for the NewsfeedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-newsfeed',
  templateUrl: 'newsfeed.html'
})
export class NewsfeedComponent {
  postType: string;

  constructor(private modalCtrl: ModalController) {
  }

  presentNewsfeedItemModal() {
    let profileModal = this.modalCtrl.create(NewsfeedItemPage);
    profileModal.present();
  }

}
