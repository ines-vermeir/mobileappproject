import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OefeningOverzichtPage } from '../oefening-overzicht/oefening-overzicht';
import { StapPage } from '../stap/stap';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html' })
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {      
      
  }
    goToOef(){
        console.log("test1")
        this.navCtrl.push(OefeningOverzichtPage);
    }
 
}


