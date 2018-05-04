import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedbackPage } from '../pages/feedback/feedback';
import { OefeningenPage} from "../pages/oefeningen/oefeningen";
import { Sleep_oefeningPage} from "../pages/sleep_oefening/sleep_oefening";
import { Orden_oefening} from "../pages/orden_oefening/orden_oefening";
import { Keuze_oefening } from "../pages/keuze_oefening/keuze_oefening";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedbackPage,
    OefeningenPage,
    Sleep_oefeningPage,
    Orden_oefening,
    Keuze_oefening
  ],
  imports: [
    BrowserModule,
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
    Keuze_oefening
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
