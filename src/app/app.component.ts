import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MateriaalSelecterenPage } from '../pages/materiaal-selecteren/materiaal-selecteren';
import { LabotafelPage} from '../pages/labotafel/labotafel'
import { DragMateriaalDirective } from '../directives/drag-materiaal/drag-materiaal';
import { LinkPage } from '../pages/link/link';
import { MateriaalWerkwijzePage} from '../pages/materiaal-werkwijze/materiaal-werkwijze';
import {OverzichtPage} from '../pages/overzicht/overzicht';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //@ViewChild('myNav') nav: NavController

  rootPage:any = OverzichtPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


/*  ngOnInit() {
      // Let's navigate from TabsPage to Page1
      this.nav.push(MateriaalSelecterenPage);
   }*/
}
