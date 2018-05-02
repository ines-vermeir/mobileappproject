import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  keuze = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaalWerkwijzePage');
  }

  print(){
    console.log(this.keuze);
    console.log("test");
  }

  next(){
    console.log(this.keuze);
  }

}
