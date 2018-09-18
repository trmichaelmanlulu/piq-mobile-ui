import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DocumentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document-modal',
  templateUrl: 'document-modal.html',
})
export class DocumentModalPage {
  itemType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.itemType = this.navParams.get('itemType');
  }

  dismissModal() {
      this.viewCtrl.dismiss();
  }

}
