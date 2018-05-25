import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FeedbackPage } from '../pages/feedback/feedback';
import { OefeningenPage} from "../pages/oefeningen/oefeningen";
import { Sleep_oefeningPage} from "../pages/sleep_oefening/sleep_oefening";
import { Orden_oefening} from "../pages/orden_oefening/orden_oefening";
import { Keuze_oefening } from "../pages/keuze_oefening/keuze_oefening";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = OefeningenPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}

