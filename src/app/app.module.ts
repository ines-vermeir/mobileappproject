import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
//import { AuthService } from '../providers/auth-service';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedbackPage } from '../pages/feedback/feedback';
import { OefeningenPage} from "../pages/oefeningen/oefeningen";
import { Sleep_oefeningPage} from "../pages/sleep_oefening/sleep_oefening";
import { Orden_oefening} from "../pages/orden_oefening/orden_oefening";
import { Keuze_oefening } from "../pages/keuze_oefening/keuze_oefening";
import { LoginPage } from "../pages/login/login";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedbackPage,
    OefeningenPage,
    Sleep_oefeningPage,
    Orden_oefening,
    Keuze_oefening,
    LoginPage
  ],
  imports: [
  
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedbackPage,
    OefeningenPage,
    Sleep_oefeningPage,
    Orden_oefening,
    Keuze_oefening,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen, AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
