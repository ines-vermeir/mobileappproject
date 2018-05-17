import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MateriaalSelecterenPage } from '../pages/materiaal-selecteren/materiaal-selecteren';
import { DragMateriaalDirective } from '../directives/drag-materiaal/drag-materiaal';
import { CommonModule } from '@angular/common';
import { LabotafelPage} from '../pages/labotafel/labotafel'
import { MateriaalWerkwijzePage} from '../pages/materiaal-werkwijze/materiaal-werkwijze';
import {OverzichtPage} from '../pages/overzicht/overzicht';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MateriaalSelecterenPage,
    DragMateriaalDirective,
    LabotafelPage,
    MateriaalWerkwijzePage,
    OverzichtPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MateriaalSelecterenPage,
    LabotafelPage,
    MateriaalWerkwijzePage,
    OverzichtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
