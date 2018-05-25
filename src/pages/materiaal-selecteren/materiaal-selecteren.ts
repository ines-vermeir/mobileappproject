import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LabotafelPage } from '../labotafel/labotafel';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

/**
 * Generated class for the MateriaalSelecterenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materiaal-selecteren',
  templateUrl: 'materiaal-selecteren.html',
})

export class MateriaalSelecterenPage {

  materiaal = [];
  checkItems = [];
  feedback : String;
  vraag : String;
  antwoord = [];

  constructor(private dragulaService: DragulaService, public navCtrl: NavController, public navParams: NavParams) {
    //data van home view
    let stap = navParams.get('stap');
    let poging = navParams.get('poging');

    //werkwijze uit stap halen
    this.antwoord = stap.antwoord;

    //console.log("-----------------------------");
    //console.log(this.antwoord);
    //console.log("-----------------------------");

    var self = this;
    var url_s = "https://ceb1f13c-d64d-4ddc-a4b4-12833d7843eb-bluemix.cloudant.com/projectmobileapps/c0a82b412d43ff4cbb362eccfef0d002";
    $.ajaxSetup({async:false});
    $.get(url_s,function(data_o) {
    //console.log(data_o);
    var materialen = data_o.materialen;
    console.log(materialen);
    //self.labos = overzicht;
    Object.keys(materialen).forEach(key => {
      //console.log(key);
      //self.materiaal.push(key);
      //self.svgs.push(materialen[key].url);
      self.materiaal.push({
        key: key,
        value: materialen[key].url
      });
      });
    });
    //console.log(this.materiaal);

    //feedback uit stap halen
    this.feedback = stap.feedback;
    //console.log(this.feedback);

    //vraag uit stap halen
    this.vraag = stap.vraag;
    //console.log(this.vraag);


    dragulaService.drop.subscribe(value => {
      const [bagName, e, el] = value;
      console.log('id is:', e.dataset.id);
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaalSelecterenPage');
  }

  update() {
    //do something when clicked
  }

  print(){
    console.log(this.checkItems);
  }

  /*pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.

    var array = [];
    console.log('-------- checked items:');
    console.log(this.checkItems);

    console.log('-------- key :');
    Object.keys(this.checkItems).forEach(key => {
      console.log(key);
      if (this.checkItems[key] == true) {
        array.push(key);
      }
    });

    console.log('-------- array :');
    console.log(array);
    console.log('-------- next page :');

    this.navCtrl.push(LabotafelPage, {
      selected: array,
      antwoord: this.antwoord,
      feedback: this.feedback,
      vraag: this.vraag,
      dict: this.materiaal
    });
  }*/

  controle(){/*
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
            this.navCtrl.popTo(this.navCtrl.getActive().index - 2);
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
            this.navCtrl.pop();
          }
        }
      ]
      });
      alert.present();

    }*/
  }
}
