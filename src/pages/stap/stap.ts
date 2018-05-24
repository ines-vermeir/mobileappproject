import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stap',
  templateUrl: 'stap.html',
})
export class StapPage {
    id;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StapPage');
    console.log(this.navParams.get("id"));
      this.id = this.navParams.get("id");
  }

}
