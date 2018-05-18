import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-link',
  templateUrl: 'link.html',
})
export class LinkPage {
    link;
    naam;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.link = link;
      this.naam = naam;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinkPage');
  }
    openUrl(){
        window.open(link, '_system'); 
    }

}

const link = "https://www.erasmushogeschool.be/nl";
const naam = "Eramus";
