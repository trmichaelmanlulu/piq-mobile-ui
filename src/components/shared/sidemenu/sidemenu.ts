import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { HomePage } from '../../../pages/home/home';
import { FinancialPage } from '../../../pages/financial/financial';
import { LeviesPage } from '../../../pages/levies/levies';
import { DocumentPage } from '../../../pages/document/document';
import { OpenItemsPage } from '../../../pages/open-items/open-items';
import { MeetingsPage } from '../../../pages/meetings/meetings';
import { FaqsPage } from '../../../pages/faqs/faqs';
import { StrataSettingsPage } from '../../../pages/strata-settings/strata-settings';

/**
 * Generated class for the SidemenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-sidemenu',
  templateUrl: 'sidemenu.html'
})
export class SidemenuComponent {
  activePage = 'home';

  constructor(public appCtrl: App) {
  }

  goToHomePage() {
    this.activePage = 'home';
    this.appCtrl.getActiveNav().setRoot(HomePage);
  }
  goToFinancialPage() {
    this.activePage = 'financial';
    this.appCtrl.getActiveNav().setRoot(FinancialPage);
  } 
  goToLeviesPage() {
    this.activePage = 'levies';
    this.appCtrl.getActiveNav().setRoot(LeviesPage);
  }
  goToDocumentPage() {
    this.activePage = 'documents';
    this.appCtrl.getActiveNav().setRoot(DocumentPage);
  }
  goToOpenItemsPage() {
    this.activePage = 'open-items';
    this.appCtrl.getActiveNav().setRoot(OpenItemsPage);
  }
  goToMeetingsPage() {
    this.activePage = 'meetings';
    this.appCtrl.getActiveNav().setRoot(MeetingsPage);
  }
  goToFaqsPage() {
    this.activePage = 'faqs';
    this.appCtrl.getActiveNav().setRoot(FaqsPage);
  }
  goToBuildingPage() {
    this.activePage = '';
    this.appCtrl.getActiveNav().setRoot('BuildingPage');
  }
  goToStrataSettingsPage() {
    this.activePage = 'strata-settings';
    this.appCtrl.getActiveNav().setRoot(StrataSettingsPage);
  }
}
