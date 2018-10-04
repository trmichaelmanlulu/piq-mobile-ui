import { NotifyProvider } from './../../../../../providers/notify/notify';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrandingProvider } from '../../../../../providers/branding/branding';
import { StrataApiProvider } from './../../../../../providers/strata-api/strata-api';

@Component({
  selector: 'app-theme',
  templateUrl: 'theme.html'
})
export class ThemeComponent {
  brandingParams =  this.brandingProvider.branding;
  isBrandingChanged = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private brandingProvider: BrandingProvider,
    private apiProvider: StrataApiProvider,
    private notifyProvider: NotifyProvider) {
  }

  ionViewDidLoad() {
  }

  onActivatePrimaryColor(theme, id) {
    this.isBrandingChanged = true;
    this.brandingParams.primary.id = id;
    this.brandingProvider.setPrimaryColor(theme);
  }

  onActivateBgColor(theme, id) {
    this.isBrandingChanged = true;
    this.brandingParams.bgColor.id = id;
    this.brandingProvider.setBackgroundColor(theme);
  }

  onSaveBranding() {
    const branding = JSON.parse(localStorage.getItem('theme-branding'));
    const _brandingParams = {
        id: this.brandingProvider.branding.id,
        strataId: this.brandingParams.strataId,
        bgColorId: this.brandingParams.bgColor.id,
        primaryColorId: this.brandingParams.primary.id,
        favIconUrl: this.brandingParams.favIconUrl,
        iconUrl: this.brandingParams.iconUrl,
        headerLogoUrl: this.brandingParams.headerLogoUrl,
        headerText: this.brandingParams.headerText
    };
    if (this.isBrandingChanged) {
      console.log('_brandingParams: ', _brandingParams);
      this.apiProvider.saveStrata('/branding/save', _brandingParams).subscribe(response => {
        console.log('RES: ', response);
        this.isBrandingChanged = false;
        this.brandingParams.primary.value = this.brandingProvider.primaryColor;
        this.brandingParams.bgColor.value = this.brandingProvider.backgroundColor;
        this.brandingProvider.setBranding(this.brandingParams);
        this.notifyProvider.presentToast({message: 'Theme has been successfully saved.'});
      }, error => {
        console.log('ERR: ', error);
        this.isBrandingChanged = false;
        this.notifyProvider.presentToast({message: 'Saving theme has failed.'});
      });
    }
  }

}
