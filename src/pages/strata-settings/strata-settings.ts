import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { BrandingProvider } from '../../providers/branding/branding';
import { StrataApiProvider } from './../../providers/strata-api/strata-api';

@IonicPage()
@Component({
  selector: 'page-strata-settings',
  templateUrl: 'strata-settings.html',
})
export class StrataSettingsPage {
  strataSettingsSegment = 'theme';

  constructor() {}

}
