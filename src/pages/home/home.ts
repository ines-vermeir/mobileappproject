import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OefeningOverzichtPage } from '../oefening-overzicht/oefening-overzicht';
import { StapPage } from '../stap/stap';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html' })
export class HomePage {
    lijstOefening = [];

constructor(public navCtrl: NavController, public navParams: NavParams){
      this.lijstOefening = lijst;
      
  }
    goToOef(){
        console.log("test1")
        this.navCtrl.push(OefeningOverzichtPage);
    }
 
}

const lijst = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5, title:"jdksfhjk"}
];
