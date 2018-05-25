import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-link',
  templateUrl: 'link.html',
})
export class LinkPage {
    link : string;
    vraag : string;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    //data van home view
    let stap = navParams.get('stap');
    let poging = navParams.get('poging');

    //vraag uit stap halen
    this.vraag = stap.vraag;

    //correct antwoord
    this.link = stap.link;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinkPage');
  }

  openUrl(){
        window.open(this.link, '_system');
        let alert = this.alertCtrl.create({
        title: 'Volgende',
        message: "Verder gaan met het labo?",
        buttons: [
          {
            text: 'stop',
            role: 'cancel', //cancel of null(geen rol)
            handler: () => {
                this.navCtrl.popTo( this.navCtrl.getByIndex(1));
            }
          },
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.pop();
            }
          }
        ]
        });
        alert.present();
  }

}
