import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LabotafelPage } from '../labotafel/labotafel';
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

  materiaal : Materiaal[];
  checkItems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.materiaal = lijst;
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

  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.

    var array = [];
    console.log('-------- checked items');
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
      selected: array
    });
  }
}


const lijst = [
  {name: "Pipetteerballon"},
  {name: "Maatbeker"},
  {name: "Erlenmeyer"},
  {name: "Proefbuis"}
];
