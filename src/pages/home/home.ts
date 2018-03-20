import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelecteerMateriaalPage } from '../selecteer-materiaal/selecteer-materiaal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  loadNew(){
    this.navCtrl.push(SelecteerMateriaalPage);
  }

}
