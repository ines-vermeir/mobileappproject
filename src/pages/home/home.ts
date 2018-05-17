import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeerKeuzePage } from '../meer-keuze/meer-keuze';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
    goToStap(){
        console.log("test1")
        this.navCtrl.push(MeerKeuzePage);
    }
}
