import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LabotafelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-labotafel',
  templateUrl: 'labotafel.html',
})

//const materiaal : any;

export class LabotafelPage {

  materiaalGeselecteerd = [];
  //plaats = [];
  materiaalCorrect = [
  {name: "Pipetteerballon"},
  {name: "Erlenmeyer"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.materiaalGeselecteerd = navParams.get('selected');
    /*var a = 5 ;
    for(let i = 0; i < this.materiaal.length; i++ ){
      this.plaats.push(a);
      a +=100;
    }
    console.log(this.plaats);*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabotafelPage');
    //console.log(this.materiaal);
  }

  controle(){
    let correct = false;
    if(materiaalCorrect.length === materiaalGeselecteerd.length){
      console.log("zelfde lengte");
    }
  }

}
