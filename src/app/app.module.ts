// Core
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

// Ionic native
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';

// Components
import { MyApp } from './app.component';

// Modules
import { SidemenuComponentModule } from './../components/shared/sidemenu/sidemenu.module';

// Providers
import { BrandingProvider } from '../providers/branding/branding';
import { NotifyProvider } from './../providers/notify/notify';
import { StrataApiProvider } from './../providers/strata-api/strata-api';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,

    SidemenuComponentModule,

    IonicModule.forRoot(MyApp, {
      preloadModules: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
