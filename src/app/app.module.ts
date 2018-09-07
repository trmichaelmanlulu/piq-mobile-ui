import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FinancialPage } from '../pages/financial/financial';
import { LeviesPage } from '../pages/levies/levies';
import { DocumentPage } from '../pages/document/document';
import { OpenItemsPage } from '../pages/open-items/open-items';
import { MeetingsPage } from '../pages/meetings/meetings';
import { FaqsPage } from '../pages/faqs/faqs';
import { ProfilePage } from '../pages/profile/profile';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SettingsPage } from '../pages/settings/settings';

import { ComponentsModule } from './../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    LoginPage,
    RegisterPage,
    FinancialPage,
    LeviesPage,
    DocumentPage,
    OpenItemsPage,
    MeetingsPage,
    FaqsPage,
    ProfilePage,
    NotificationsPage,
    SettingsPage
  ],
  imports: [
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
    RegisterPage,
    FinancialPage,
    LeviesPage,
    DocumentPage,
    OpenItemsPage,
    MeetingsPage,
    FaqsPage,
    ProfilePage,
    NotificationsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
