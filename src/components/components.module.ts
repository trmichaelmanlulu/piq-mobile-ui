import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

// Shared
import { SidemenuComponent } from './shared/sidemenu/sidemenu';
import { NavbarComponent } from './shared/navbar/navbar';

import { MeetingComponent } from './shared/cards/meeting/meeting';
import { RepairComponent } from './shared/cards/repair/repair';
import { LeviesComponent } from './shared/cards/levies/levies';
import { PaymentComponent } from './shared/cards/payment/payment';
import { ManagerPostComponent } from './shared/cards/manager-post/manager-post';

// Home
import { NewsfeedComponent } from './components/home/tabs/newsfeed/newsfeed';
import { FinancialComponent } from './components/home/tabs/financial/financial';
import { StrataComponent } from './components/home/tabs/strata/strata';

// Profile
import { PropertyGalleryComponent } from './components/profile/cards/property-gallery/property-gallery';



@NgModule({
	declarations: [
		NewsfeedComponent,
		FinancialComponent,
		StrataComponent,
		MeetingComponent,
		RepairComponent,
		LeviesComponent,
		ManagerPostComponent,
		PaymentComponent,
		SidemenuComponent,
    	PropertyGalleryComponent,
    	NavbarComponent,
	],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		NewsfeedComponent,
		FinancialComponent,
		StrataComponent,
		MeetingComponent,
		RepairComponent,
		LeviesComponent,
		ManagerPostComponent,
		PaymentComponent,
		SidemenuComponent,
    	PropertyGalleryComponent,
    	NavbarComponent,
	]
})
export class ComponentsModule {}
