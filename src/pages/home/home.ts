import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  labos = [];
  labo = [];
  stappen = [];

  constructor(public navCtrl: NavController) {
    var self = this;
    var url_s = "https://ceb1f13c-d64d-4ddc-a4b4-12833d7843eb-bluemix.cloudant.com/projectmobileapps/c0a82b412d43ff4cbb362eccfef0d002";
    $.ajaxSetup({async:false});
    $.get(url_s,function(data_o) {
    console.log(data_o);
    var overzicht = data_o.overzicht;
    console.log(overzicht);
    //self.labos = overzicht;
    Object.keys(overzicht).forEach(key => {
      console.log(key);
      self.labos.push(key);
      });
    });
  }

  controle(labo: string){
      this.labo = labo;
      var self = this;
      var url_s = "https://ceb1f13c-d64d-4ddc-a4b4-12833d7843eb-bluemix.cloudant.com/projectmobileapps/c0a82b412d43ff4cbb362eccfef0d002";
      $.ajaxSetup({async:false});
      $.get(url_s,function(data_o) {
      //console.log(data_o);
      var overzicht = data_o.overzicht;
      Object.keys(overzicht).forEach(key => {
        //console.log(key);
        if(key == self.labo){
          console.log(key);
          console.log(overzicht[key]);
        }
      });
      });

  }

}
