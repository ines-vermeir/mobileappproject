import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray, AlertController } from 'ionic-angular';

/**
 * Generated class for the MateriaalWerkwijzePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materiaal-werkwijze',
  templateUrl: 'materiaal-werkwijze.html',
})
export class MateriaalWerkwijzePage {

  keuze = "goed";
  isVisibleForm = true;
  isVisibleList = false;
  stappen = [];
  stappenCorrect = [];

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaalWerkwijzePage');
  }


  logForm(){

    if(this.keuze == "slecht"){
      for (let x = 0; x < 5; x++) {
       this.stappen.push(x);
       this.stappenCorrect.push(x);
     }
    }
    if(this.keuze == "goed"){
      for (let x = 0; x < 10; x++) {
       this.stappen.push(x);
       this.stappenCorrect.push(x);
     }
    }
    console.log(this.keuze);
    this.isVisibleForm = false;
    this.isVisibleList = true;
    console.log(this.stappen);

    let counter = this.stappen.length;

  // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = this.stappen[counter];
      this.stappen[counter] = this.stappen[index];
      this.stappen[index] = temp;
    }

    console.log(this.stappen);
  }


  reorderItems(indexes) {
    this.items = reorderArray(this.stappen, indexes);
  }

  controle(){
    console.log("controle");
    console.log(this.stappen);

    var correct = true;
    for(var i = 0; i < this.stappenCorrect.length; i++){
      if(this.stappen[i] != this.stappenCorrect[i]){
        correct = false;
      }
    }

    if(correct){
      let alert = this.alertCtrl.create({
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
    alert.present();
    }else{
      let alert = this.alertCtrl.create({
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
            this.logForm();
          }
        }
      ]
      });
      alert.present();
    }

  }


}
