import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenItemsPage } from './open-items';

@NgModule({
  declarations: [
    OpenItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenItemsPage),
  ],
})
export class OpenItemsPageModule {}
