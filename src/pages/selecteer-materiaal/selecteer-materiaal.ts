import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DOCUMENT } from '@angular/common';

/**
 * Generated class for the SelecteerMateriaalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecteer-materiaal',
  templateUrl: 'selecteer-materiaal.html',
})

export class SelecteerMateriaalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecteerMateriaalPage');
  }
  
  showInfo() {
    let alert = this.alertCtrl.create({
      title: 'Extra uitleg',
      subTitle: 'Selecteer de juiste materialen',
      buttons: ['OK']
    });
    alert.present();
  }
  addMaterial(){
    
  }
 
  
}


