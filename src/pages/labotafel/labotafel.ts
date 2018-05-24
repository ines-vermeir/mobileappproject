import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams, ViewController, App } from 'ionic-angular';
//import { MateriaalSelecterenPage } from '../materiaal-selecteren/materiaal-selecteren';
/**
 * Generated class for the LabotafelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-labotafel',
  templateUrl: 'labotafel.html',
})

//const materiaal : any;

export class LabotafelPage {

  materiaalGeselecteerd = [];
  url = [];
  //plaats = [];
  materiaalCorrect = [];
  feedback : String;
  vraag : String;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
    this.materiaalGeselecteerd = navParams.get('selected');
    var materiaal = navParams.get('antwoord');
    this.feedback = navParams.get('feedback');
    this.vraag = navParams.get('vraag');

    Object.keys(materiaal).forEach(key => {
        this.materiaalCorrect.push(key);
    });
    console.log("****************************");
    console.log(this.materiaalCorrect);
      console.log("****************************");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabotafelPage');
    //console.log(this.materiaal);
  }

  controle(){
    let correct = false;
    if(this.materiaalCorrect.length === this.materiaalGeselecteerd.length){
      let juist = 0;
      for(let i = 0; i < this.materiaalCorrect.length; i++){
        for(let j = 0; j < this.materiaalGeselecteerd.length; j++){
          if(this.materiaalCorrect[i] == this.materiaalGeselecteerd[j]){
            juist++;
          }
        }
      }
      if(juist === this.materiaalCorrect.length){
        correct = true;
      }
    }

    if(correct){
      let alert = this.alertCtrl.create({
      title: 'Correct',
      message: "Antwoord is correct!",
      buttons: [
        {
          text: 'Volgende vraag',
          handler: () => {
            this.navCtrl.popTo( this.navCtrl.getByIndex(1));
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
            this.navCtrl.popToRoot();
          }
        },
        {
          text: 'probeer opnieuw',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
      });
      alert.present();
    }
  }

}
