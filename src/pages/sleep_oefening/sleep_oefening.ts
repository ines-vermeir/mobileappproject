import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-sleep-oefening',
  templateUrl: 'sleep_oefening.html'
})
export class Sleep_oefeningPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Info over de oefening',
      subTitle: 'Nog meer uitleg over deze oefening',
      message: 'Poging: 1/5',
      buttons: ['Sluiten']
    });
    alert.present();
  }

}
