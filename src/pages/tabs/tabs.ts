import { Component, Renderer2 } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { NotificationsPage } from '../notifications/notifications';
import { SettingsPage } from '../settings/settings';

import { BrandingProvider } from '../../providers/branding/branding';

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

  constructor(
    public navCtrl: NavController, 
    private brandingProvider: BrandingProvider, 
    private renderer: Renderer2) {
      this.brandingProvider.renderer = this.renderer;
  }

  ngOnInit() {
    this.setBranding();
  }

  setBranding() {
    const branding = this.brandingProvider.branding;
    this.brandingProvider.setPrimaryColor(branding.primary.value);
    this.brandingProvider.setBackgroundColor(branding.bgColor.value);
  }
}
