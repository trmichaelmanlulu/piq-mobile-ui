import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ProfilePopoverPage } from '../_popovers/profile-popover/profile-popover';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileSegment = 'recent-updates';

  constructor(public navCtrl: NavController, public navParams: NavParams,  public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
  }

  presentPopover(myEvent) {
    const popover = this.popoverCtrl.create(ProfilePopoverPage);
    popover.present({
      ev: myEvent
    });
  }

}
