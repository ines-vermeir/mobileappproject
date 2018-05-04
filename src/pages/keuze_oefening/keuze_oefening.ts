import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-keuze-oefening',
  templateUrl: 'keuze_oefening.html'
})
export class Keuze_oefening {

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
