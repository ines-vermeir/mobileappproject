import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MeerKeuzePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meer-keuze',
  templateUrl: 'meer-keuze.html',
})
export class MeerKeuzePage {
    mogelijkheden = [];
    correct : string;
    feedback : string;
    vraag : string;
    keuze = [];

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
      //data van home view
      let stap = navParams.get('stap');
      let poging = navParams.get('poging');

      //werkwijze uit stap halen
     Object.keys(stap.antwoord.mogelijkheden).forEach(key => {
        if(stap.antwoord.mogelijkheden[key] != null){
          this.mogelijkheden.push(stap.antwoord.mogelijkheden[key]);
        }
      });

      console.log(stap.antwoord.mogelijkheden);

      //feedback uit stap halen
      this.feedback = stap.feedback;

      //vraag uit stap halen
      this.vraag = stap.vraag;

      //correct antwoord
      this.correct = stap.antwoord.correct;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeerKeuzePage');
  }

    valideren(){
      var keuze;
      Object.keys( this.keuze).forEach(key => {
         keuze = key
       });
        if (this.correct == keuze){

            let alert = this.alertCtrl.create({
            title: 'Correct',
            message: "Antwoord is correct!",
            buttons: [
              {
                text: 'Volgende vraag',
                handler: () => {
                  this.navCtrl.pop();
                }
              }]
          });
          alert.present();
          }else{
            let alert = this.alertCtrl.create({
            title: 'Feedback',
            message: this.feedback,
            buttons: [
              {
                text: 'stop',
                role: 'cancel', //cancel of null(geen rol)
                handler: () => {
                    this.navCtrl.popTo( this.navCtrl.getByIndex(1));
                }
              },
              {
                text: 'probeer opnieuw',
                handler: () => {
                  //pagina blijft zoals het is
                }
              }
            ]
            });
            alert.present();
          }

    }


}
