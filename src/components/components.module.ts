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
import { StrataComponent } from './shared/tabs/strata/strata';

// Profile
import { PropertyGalleryComponent } from './components/profile/cards/property-gallery/property-gallery';
import { PropertyDetailsComponent } from './components/building/tabs/property-details/property-details';
import { PropertyInsuranceComponent } from './components/building/tabs/property-insurance/property-insurance';
import { PropertyLotsComponent } from './components/building/tabs/property-lots/property-lots';

// Meetings
import { UpcomingMeetingsComponent } from './components/meetings/tabs/upcoming-meetings/upcoming-meetings';
import { PreviousMeetingsComponent } from './components/meetings/tabs/previous-meetings/previous-meetings';
import { FinancialTypesComponent } from './components/financial/cards/financial-types/financial-types';
import { LevyTotalInfoComponent } from './components/levies/cards/levy-total-info/levy-total-info';
import { LevyInfoComponent } from './components/levies/cards/levy-info/levy-info';



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
		PropertyDetailsComponent,
		PropertyInsuranceComponent,
		PropertyLotsComponent,
		UpcomingMeetingsComponent,
		PreviousMeetingsComponent,
    	FinancialTypesComponent,
		LevyTotalInfoComponent,
		LevyInfoComponent,
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
		PropertyDetailsComponent,
		PropertyInsuranceComponent,
		PropertyLotsComponent,
		UpcomingMeetingsComponent,
		PreviousMeetingsComponent,
    	FinancialTypesComponent,
		LevyTotalInfoComponent,
		LevyInfoComponent,
	]
})
export class ComponentsModule {}
