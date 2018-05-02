import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MateriaalSelecterenPage } from '../pages/materiaal-selecteren/materiaal-selecteren';
import { DragMateriaalDirective } from '../directives/drag-materiaal/drag-materiaal';
import { CommonModule } from '@angular/common';
import { LabotafelPage} from '../pages/labotafel/labotafel'
import { FIREBASE_CONFIG } from './firebase.config';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MateriaalSelecterenPage,
    DragMateriaalDirective,
    LabotafelPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    CommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MateriaalSelecterenPage,
    LabotafelPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
