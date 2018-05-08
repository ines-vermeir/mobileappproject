import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StapPage } from '../stap/stap';

/**
 * Generated class for the OefeningOverzichtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oefening-overzicht',
  templateUrl: 'oefening-overzicht.html',
})
export class OefeningOverzichtPage {
        lijstOefening = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.lijstOefening = lijst;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OefeningOverzichtPage');
      
  }
    launchStap(oef){
        console.log("click");
        console.log(oef);
        this.navCtrl.push(StapPage, oef);
    }
    
    

}

const lijst = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5, title:"jdksfhjk"}
];