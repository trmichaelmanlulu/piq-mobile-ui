import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class NotifyProvider {

  constructor(public http: HttpClient, public toastCtrl: ToastController) {
  }

  public presentToast(properties: {message: string, duration?: number, position?: string, showCloseButton?: boolean, closeButtonText?: string}) {
    const toast = this.toastCtrl.create({
      message: properties.message,
      duration: properties.duration || 3000,
      position: properties.position,
      showCloseButton: properties.showCloseButton,
    });
    toast.present();
  }

}
