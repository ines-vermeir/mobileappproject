import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import moment from 'moment';
import { Storage } from '@ionic/storage';
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
    desc : string;
    pogingen : number = 1;
  constructor(private storage: Storage,private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
      //data van home view
      let stap = navParams.get('stap');
      this.desc = navParams.get('desc');

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
              if(this.pogingen < 3 || this.pogingen == 4){
                let alert = this.alertCtrl.create({
                title: 'Fout',
                message: 'Antwoord is niet correct',
                buttons: [
                  {
                    text: 'stop',
                    role: 'cancel', //cancel of null(geen rol)
                    handler: () => {
                      this.navCtrl.popToRoot();
                    }
                  },
                  {
                    text: 'probeer opnieuw',
                    handler: () => {
                      //this.navCtrl.pop();
                    }
                  }
                ]
                });
                //alert.present();
                alert.present();
              }
              if(this.pogingen == 3){
                let alert = this.alertCtrl.create({
                title: 'Feedback',
                message: this.feedback,
                buttons: [
                  {
                    text: 'stop',
                    role: 'cancel', //cancel of null(geen rol)
                    handler: () => {
                      this.navCtrl.popToRoot();
                    }
                  },
                  {
                    text: 'probeer opnieuw',
                    handler: () => {
                      //this.navCtrl.pop();
                    }
                  }
                ]
                });
                //alert.present();
                alert.present();
              }
              if(this.pogingen == 5){
                let alert = this.alertCtrl.create({
                title: 'Fout',
                message: "Antwoord is niet correct, u heeft 5 keer geprobeerd. Probeer over een uur opnieuw.",
                buttons: [
                  {
                    text: 'OK',
                    handler: () => {
                      this.storage.set('block', 'true');
                      let time = moment().add(1, 'hours').format();
                      console.log(time);
                      this.storage.set('time', time);
                      this.navCtrl.popToRoot();
                    }
                  }]
              });
                alert.present();
              }
              this.pogingen = this.pogingen + 1;
            }

    }


}
