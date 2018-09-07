import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { NotificationsPage } from '../notifications/notifications';
import { SettingsPage } from '../settings/settings';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  homeTab = HomePage;
  profileTab = ProfilePage;
  notificationsTab = NotificationsPage;
  settingsTab = SettingsPage;

  constructor(public navCtrl: NavController) {
  }
}
