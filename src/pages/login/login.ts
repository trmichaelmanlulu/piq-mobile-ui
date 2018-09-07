declare var window;

import { Observable, Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { RegisterPage } from "../register/register";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  showKeyboard = false;
  inputFocus = false;
  private keybaordShowSub: Subscription;
  private keyboardHideSub: Subscription;

  constructor(public navCtrl: NavController, public forgotCtrl: AlertController, public toastCtrl: ToastController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register() {
    this.navCtrl.setRoot(RegisterPage);
  }

  login() {
    this.navCtrl.setRoot(TabsPage);
  }

  forgotPassword() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter your email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 5000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

  onInputFocus() {
    this.showKeyboard = true;
    this.inputFocus = true;
  }

  onInputBlur() {
    this.showKeyboard = false;
    this.inputFocus = false;
  }

  ionViewWillEnter() {
		this.addKeyboardListeners();
	}

	ionViewWillLeave() {
		this.removeKeyboardListeners();
	}

	private addKeyboardListeners() {
		this.keybaordShowSub = Observable.fromEvent(window, 'keyboardWillShow').subscribe(e => {
      this.showKeyboard = true;
		});

		this.keyboardHideSub = Observable.fromEvent(window, 'keyboardWillHide').subscribe(e => {
      this.showKeyboard = false;
		});
	}

	private removeKeyboardListeners() {
		if (this.keybaordShowSub) this.keybaordShowSub.unsubscribe();
		if (this.keyboardHideSub) this.keyboardHideSub.unsubscribe();
  }
}