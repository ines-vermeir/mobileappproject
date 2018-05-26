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
import { MeerKeuzePage } from '../pages/meer-keuze/meer-keuze';
import { LinkPage } from '../pages/link/link';
import { MateriaalWerkwijzePage} from '../pages/materiaal-werkwijze/materiaal-werkwijze';
import {OverzichtPage} from '../pages/overzicht/overzicht';
//import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { LoginPage } from "../pages/login/login";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AfvalverwijderingPage } from '../pages/afvalverwijdering/afvalverwijdering';

import { DragulaModule } from 'ng2-dragula';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MateriaalSelecterenPage,
    DragMateriaalDirective,
    MeerKeuzePage,
    LinkPage,
    MateriaalWerkwijzePage,
    OverzichtPage,
    LoginPage,
    AfvalverwijderingPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CommonModule,
    HttpModule,
    DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MateriaalSelecterenPage,
    MeerKeuzePage,
    LinkPage,
    MateriaalWerkwijzePage,
    OverzichtPage,
    LoginPage,
    AfvalverwijderingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
