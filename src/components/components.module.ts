import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { NewsfeedComponent } from './components/home/tabs/newsfeed/newsfeed';
import { FinancialComponent } from './components/home/tabs/financial/financial';
import { StrataComponent } from './components/home/tabs/strata/strata';
import { MeetingComponent } from './components/home/cards/meeting/meeting';
import { RepairComponent } from './components/home/cards/repair/repair';
import { LeviesComponent } from './components/home/cards/levies/levies';
import { ManagerPostComponent } from './components/home/cards/manager-post/manager-post';
import { PaymentComponent } from './components/home/cards/payment/payment';
import { SidemenuComponent } from './shared/sidemenu/sidemenu';

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
	]
})
export class ComponentsModule {}
