import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.materiaal = lijst;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaalSelecterenPage');
  }

  update() {
    console.log(this);
    let i : int = 0;
    for(let item of this.materiaal){
      if(this.materiaal[i].name == true){
        console.log(this.materiaal + "true");
      }
      i++;
    }
  }
}

export class Materiaal{
   id: number;
   name: string;
}

const lijst : Materiaal[] = [
  {id: 1, name: "Pipetteerballon"},
  {id: 2, name: "Maatbeker"},
  {id: 3, name: "Erlenmeyer"}
];
