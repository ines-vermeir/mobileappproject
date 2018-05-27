import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as $ from 'jquery';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
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
  feedback : string;
  vraag : string;
  antwoord = [];
  desc : string;
  pogingen : number = 1;

  constructor(private storage: Storage,public authServiceProvider: AuthServiceProvider,private nativeStorage: NativeStorage, private alertCtrl: AlertController,private dragulaService: DragulaService, public navCtrl: NavController, public navParams: NavParams) {
    //data van home view
    let stap = navParams.get('stap');
    this.desc = navParams.get('desc');
    var self = this;

    //antwoord uit stap halen
  Object.keys(stap.antwoord).forEach(key => {
      self.antwoord.push(key);
    });


    //haal alle materialen op
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


    /*dragulaService.drop.subscribe(value => {

      const [bagName, e, el] = value;
      console.log('id is:', e.dataset.id);
    });*/
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

  controle(){
    var array = [];
  //  console.log('-------- checked items:');
  //  console.log(this.checkItems);

    //console.log('-------- key :');
    Object.keys(this.checkItems).forEach(key => {
  //    console.log(key);
      if (this.checkItems[key] == true) {
        array.push(key);
      }
    });
    let correct = false;
    console.log(this.antwoord.length);
    console.log(array.length);
    if(this.antwoord.length === array.length){
      let juist = 0;
      for(let i = 0; i < this.antwoord.length; i++){
        for(let j = 0; j < array.length; j++){
          if(this.antwoord[i] == array[j]){
            juist++;
          }
        }
      }
      if(juist === this.antwoord.length){
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
