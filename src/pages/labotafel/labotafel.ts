import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams, ViewController, App } from 'ionic-angular';
import { MateriaalSelecterenPage } from '../materiaal-selecteren/materiaal-selecteren';
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
  //plaats = [];
  materiaalCorrect = [
  {name: "Pipetteerballon"},
  {name: "Erlenmeyer"}
  ];

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
    this.materiaalGeselecteerd = navParams.get('selected');
    /*var a = 5 ;
    for(let i = 0; i < this.materiaal.length; i++ ){
      this.plaats.push(a);
      a +=100;
    }
    console.log(this.plaats);*/
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
          if(this.materiaalCorrect[i].name == this.materiaalGeselecteerd[j]){
            juist++;
          }
        }
      }
      if(juist === this.materiaalCorrect.length){
        correct = true;
      }
    }

    if(correct){
      let alertct = this.alertCtrl.create({
      title: 'Correct',
      message: "NOT IMPLEMENTED Antwoord is correct!",
      buttons: [
        {
          text: 'Volgende vraag',
          handler: () => {
            console.log('NOT IMPLEMENTED -> GA NAAR VOLGENDE OEFENING');
          }
        }]
    });
    }else{
      let alertct = this.alertCtrl.create({
      title: 'Feedback',
      message: "Antwoord niet correct. (stop not IMPLEMENTED)",
      buttons: [
        {
          text: 'stop',
          role: 'cancel', //cancel of null(geen rol)
          handler: () => {
            console.log('NOT IMPLEMENTED -> GA TERUG NAAR OVERZICHT');
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
    }
    // alertct.present();
  }

}
