import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
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

  //keuze = "goed";
  isVisibleForm = false;
  isVisibleList = true;
  stappen = [];
  stappenCorrect = [];
  feedback : string;
  vraag : string;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  getData(){
    var url_s = "https://ceb1f13c-d64d-4ddc-a4b4-12833d7843eb-bluemix.cloudant.com/projectmobileapps/c0a82b412d43ff4cbb362eccfef0d002";
    var self = this;
    $.ajaxSetup({async:false});
    $.get(url_s,function(data_o) {
    console.log(data_o);
      var overzicht = data_o.overzicht;
      //console.log(overzicht);
      var labo = overzicht.labo1;
      //console.log(labo);
      var stap = labo.stap2;
      //console.log(stap)
      var antwoorden = stap.antwoord;
      for(let i = 0; i < antwoorden.length; i++){
        self.stappen.push(antwoorden[i]);
        self.stappenCorrect.push(antwoorden[i]);
      }
      self.feedback = stap.feedback;
      self.vraag = stap.vraag;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaalWerkwijzePage');
    var self = this;
    $(document).ready(function(){
      self.getData();
      console.log("initialize");
      console.log(self.stappen);
      console.log(self.stappenCorrect);
      self.randomize();
    });
  }

  randomize(){
    let counter = this.stappen.length;
    //While there are elements in the array
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

    console.log("random");
    console.log(this.stappen);
    console.log(this.stappenCorrect);
  }


  reorderItems(indexes) {
    this.stappen = reorderArray(this.stappen, indexes);
  }

  controle(){
    console.log("controle");
    console.log(this.stappen);
    console.log(this.stappenCorrect);

    var correct = true;
    for(var i = 0; i < this.stappenCorrect.length; i++){
      if(this.stappen[i] != this.stappenCorrect[i]){
        correct = false;
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
            console.log('NOT IMPLEMENTED -> GA NAAR VOLGENDE OEFENING');
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
            console.log('NOT IMPLEMENTED -> GA TERUG NAAR OVERZICHT');
          }
        },
        {
          text: 'probeer opnieuw',
          handler: () => {
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          }
        }
      ]
      });
      alert.present();
    }

  }


}
