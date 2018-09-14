import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, Slides } from 'ionic-angular';

/**
 * Generated class for the NewsfeedItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsfeed-modal',
  templateUrl: 'newsfeed-modal.html',
})
export class NewsfeedModalPage {
  postType: string;
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private toastCtrl: ToastController) {
  }

  ionViewDidEnter() {
    this.presentNavigateInstructionToast();
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  dismissNewsfeedItem() {
    this.viewCtrl.dismiss();
  }

  presentNavigateInstructionToast() {
    const toast = this.toastCtrl.create({
      message: 'Swipe left or right to view other pinned posts.',
      duration: 3000
    });
    toast.present();
  }
}
