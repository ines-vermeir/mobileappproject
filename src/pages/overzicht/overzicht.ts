import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import {MateriaalSelecterenPage} from '../materiaal-selecteren/materiaal-selecteren';
import {MateriaalWerkwijzePage} from '../materiaal-werkwijze/materiaal-werkwijze';
/**
 * Generated class for the OverzichtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overzicht',
  templateUrl: 'overzicht.html',
})
export class OverzichtPage {

    labos = [];
    keuzeLabo : String;
    labo = [];

    constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
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

    controle(keuzeLabo: string){
        this.keuzeLabo = keuzeLabo;
        var self = this;
        var url_s = "https://ceb1f13c-d64d-4ddc-a4b4-12833d7843eb-bluemix.cloudant.com/projectmobileapps/c0a82b412d43ff4cbb362eccfef0d002";
        $.ajaxSetup({async:false});
        $.get(url_s,function(data_o) {
        //console.log(data_o);
        var overzicht = data_o.overzicht;
        Object.keys(overzicht).forEach(key => {
          //console.log(key);
          if(key == self.keuzeLabo){
            console.log("key:");
            console.log(key);
            console.log("overzicht[key]:");
            console.log(overzicht[key]);
            self.labo = overzicht[key];
          }
        });
        });
        self.doLabo();
    }

    doLabo(){
      console.log("dolabo:");
      console.log(this.labo);

      var aantalStappen = 0;
      var stappen = [];
      var pogingen = 0;
      var stap = [];
      var correct = false;

      var self = this;

      //1. count # stappen & sla stappen op (enkel naam)
      //2. for loop met de stappen
      //3. poging elke keer op 0 zetten en correct op false
      //4. object van huidige stap opslaan
      //X. while loop om te controleren dat de stappen correct voltooid zijn (5pogingen)
      //6. switch case naar juiste pagina sturen adhv type vraag
      //7. naar de pagina wordt de stap doorgestuurd


      //1. count # stappen & sla stappen op (enkel naam)
      Object.keys(this.labo).forEach(key => {
      if(key.indexOf("stap") != -1){
        //count stappen
        aantalStappen = aantalStappen + 1;
        //sla stap op
        stappen.push(key);
      }
      });

      //2. for loop met de stappen
      for(var i = aantalStappen-1; i >= 0; i--){
          //3. poging elke keer op 0 zetten & correct op false
          pogingen = 0;
          correct = false;

          //4. object van huidige stap opslaan
          stap = this.labo[stappen[i]];
          //console.log(stap);
          //console.log(stap.type);
          //X. while loop om te controleren dat de stappen correct voltooid zijn (5pogingen)

            //6. switch case naar juiste pagina sturen adhv type vraag
            //7. naar de pagina wordt de stap doorgestuurd

            switch(stap.type){
              case "materiaal":
                this.navCtrl.push(MateriaalSelecterenPage, {
                  stap: stap,
                  poging: pogingen
                }, {animate: false}
                );
                //this.navCtrl.setRoot(MateriaalWerkwijzePage, {}, {animate: false, direction: 'forward'});
                console.log("switch materiaal");
                break;
              case "chronologische volgorde":
                this.navCtrl.push(MateriaalWerkwijzePage, {
                  stap: stap,
                  poging: pogingen
                }, {animate: false}
                );
                console.log("switch chronologische");
                break;
              case "keuzevraag":
                console.log("switch keuzevraag");
                break;
              case "link":
                console.log("switch link");
                break;
              case "afvalverwijdering":
                console.log("switch afvalverwijdering");
                break;
              default:
                let alert = this.alertCtrl.create({
                  title: 'Error!',
                  subTitle: 'Oefening kan niet worden getoond.',
                  buttons: ['Ok']
                });
                alert.present();
                break;
            }
      }
  }

}
