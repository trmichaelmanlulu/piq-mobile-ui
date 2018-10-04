// Core
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

// Ionic native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';

// Modules
import { ComponentsModule } from './../components/components.module';

// Components
import { MyApp } from './app.component';

// Pages
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { FinancialPage } from '../pages/financial/financial';
import { LeviesPage } from '../pages/levies/levies';
import { DocumentPage } from '../pages/document/document';
import { OpenItemsPage } from '../pages/open-items/open-items';
import { MeetingsPage } from '../pages/meetings/meetings';
import { FaqsPage } from '../pages/faqs/faqs';
import { ProfilePage } from '../pages/profile/profile';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';
import { BuildingPage } from '../pages/building/building';
import { StrataSettingsPage } from '../pages/strata-settings/strata-settings';

// Pages (Modals)
import { MyPropertiesModalPage } from '../pages/_modals/my-properties-modal/my-properties-modal';
import { NewsfeedModalPage } from '../pages/_modals/newsfeed-modal/newsfeed-modal';
import { NotificationsModalPage } from '../pages/_modals/notifications-modal/notifications-modal';
import { OpenItemsModalPage } from '../pages/_modals/open-items-modal/open-items-modal';
import { FaqsModalPage } from '../pages/_modals/faqs-modal/faqs-modal';
import { DocumentModalPage } from '../pages/_modals/document-modal/document-modal';

// Pages (Popovers)
import { NotificationPopoverPage } from '../pages/_popovers/notification-popover/notification-popover';
import { ProfilePopoverPage } from '../pages/_popovers/profile-popover/profile-popover';

// Directives
import { ParallaxHeaderDirective } from '../directives/parallax-header/parallax-header';

// Providers
import { BrandingProvider } from '../providers/branding/branding';
import { NotifyProvider } from './../providers/notify/notify';
import { StrataApiProvider } from './../providers/strata-api/strata-api';

@NgModule({
  declarations: [
    MyApp,

    TabsPage,
    HomePage,
    LoginPage,
    FinancialPage,
    LeviesPage,
    DocumentPage,
    OpenItemsPage,
    MeetingsPage,
    FaqsPage,
    ProfilePage,
    NotificationsPage,
    SettingsPage,
    BuildingPage,
    StrataSettingsPage,

    MyPropertiesModalPage,
    NewsfeedModalPage,
    NotificationsModalPage,
    OpenItemsModalPage,
    FaqsModalPage,
    DocumentModalPage,

    NotificationPopoverPage,
    ProfilePopoverPage,

    ParallaxHeaderDirective,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    TabsPage,
    HomePage,
    LoginPage,
    FinancialPage,
    LeviesPage,
    DocumentPage,
    OpenItemsPage,
    MeetingsPage,
    FaqsPage,
    ProfilePage,
    NotificationsPage,
    SettingsPage,
    BuildingPage,    
    StrataSettingsPage,
    MyPropertiesModalPage,
    NewsfeedModalPage,
    NotificationsModalPage,
    OpenItemsModalPage,
    FaqsModalPage,
    DocumentModalPage,
    
    NotificationPopoverPage,
    ProfilePopoverPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BrandingProvider,
    NotifyProvider,
    StrataApiProvider
  ]
})
export class AppModule {}
