import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeviesPage } from './levies';

@NgModule({
  declarations: [
    LeviesPage,
  ],
  imports: [
    IonicPageModule.forChild(LeviesPage),
  ],
})
export class LeviesPageModule {}
