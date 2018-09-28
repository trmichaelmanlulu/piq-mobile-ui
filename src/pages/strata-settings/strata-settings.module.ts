import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StrataSettingsPage } from './strata-settings';

@NgModule({
  declarations: [
    StrataSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(StrataSettingsPage),
  ],
})
export class StrataSettingsPageModule {}
