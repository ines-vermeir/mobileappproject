import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController,ToastController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import {MateriaalSelecterenPage} from '../materiaal-selecteren/materiaal-selecteren';
import {MateriaalWerkwijzePage} from '../materiaal-werkwijze/materiaal-werkwijze';
import { MeerKeuzePage } from '../meer-keuze/meer-keuze';
import { LinkPage } from '../link/link';
import { AfvalverwijderingPage } from '../afvalverwijdering/afvalverwijdering';
import { LoginPage } from '../login/login';
import { NativeStorage } from '@ionic-native/native-storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';
import moment from 'moment';
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
    public userDetails:any;
    block : boolean;
    desc : string;
    hour: number = 2;

    constructor(private storage: Storage, public navParams: NavParams, public loadingCtrl: LoadingController, public navCtrl: NavController, private alertCtrl: AlertController, public toastCtrl:ToastController) {
      const data = JSON.parse(localStorage.getItem('userData'));
      this.userDetails = data.userData;

      var self = this;
      var url_s = "https://ceb1f13c-d64d-4ddc-a4b4-12833d7843eb-bluemix.cloudant.com/projectmobileapps/c0a82b412d43ff4cbb362eccfef0d002";
      $.ajaxSetup({async:false});
      $.get(url_s,function(data_o) {
      //console.log(data_o);
      var overzicht = data_o.overzicht;
      //console.log(overzicht);
      //self.labos = overzicht;
      Object.keys(overzicht).forEach(key => {
      //  console.log(key);
        self.labos.push({
            labo: key,
            desc: overzicht[key].beschrijving
          });
        });
      });
    }

    ionViewDidEnter(){
      this.storage.get('time').then((time) => {
      //  console.log(moment().format() < time );
        if(time != null || moment().isBefore(time)){
        let milisec = moment(time).diff(moment(),'seconds') * 1000;
        console.log(milisec);
        this.storage.get('block').then((result) => {
          //console.log(result);
          if(result == 'true'){
            let loading = this.loadingCtrl.create({
            spinner: 'hide',
            cssClass: "loading-timer",
            content: `
              <div >
              <img src="../../assets/imgs/beaker-icon.svg" alt="loading icon" >
              </div>
              <div class="pogingen-header">
              <h3>Te veel foute pogingen. </h3><h3>Probeer straks opnieuw!</h3>
              <p>` + moment(time).fromNow()  + `</p>
              </div>
              `,
              duration: milisec,
              showBackdrop: false
            });
            loading.present();
            setTimeout(() => {
                this.storage.remove('block');
                this.storage.remove('time');
            }, milisec)
          }
      });
    }else{
      this.storage.set('block', false);
    }
    });
    }

    logout(){
      localStorage.clear();
      this.navCtrl.setRoot(LoginPage);
      this.backToLogin();
    }
    backToLogin(){
      this.navCtrl.popToRoot();
    }

    controle(keuzeLabo: string, desc: string){
        this.desc = desc;
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
            //console.log("key:");
            //console.log(key);
            //console.log("overzicht[key]:");
            //console.log(overzicht[key]);
            self.labo = overzicht[key];
          }
        });
        });
        self.doLabo();
    }
// class="loading-overlay"
    showLoading(){
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        cssClass: "loading-overlay",
        content: `
          <div>
            <img src="../../assets/imgs/beaker-icon.svg" alt="loading icon">
          </div>
          `,
          duration: 2000
      });

      loading.present();
    }

    doLabo(){
      this.showLoading();
      console.log("dolabo");
      //console.log(this.labo);

      var aantalStappen = 0;
      var stappen = [];
      var pogingen = 0;
      var stap = [];
    //  var stap = (params: string): Observable<any> ;
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
                  desc: this.desc
                }, {animate: false}
              );
                //this.navCtrl.setRoot(MateriaalWerkwijzePage, {}, {animate: false, direction: 'forward'});
                //console.log("switch materiaal");
                break;
              case "chronologische volgorde":
                this.navCtrl.push(MateriaalWerkwijzePage, {
                  stap: stap,
                  desc: this.desc
                }, {animate: false}
              );
                //console.log("switch chronologische");
                break;
              case "keuzevraag":
                this.navCtrl.push(MeerKeuzePage, {
                  stap: stap,
                  desc: this.desc
                }, {animate: false}
                );
                //console.log("switch keuzevraag");
                break;
              case "link":
                this.navCtrl.push(LinkPage, {
                  stap: stap,
                  desc: this.desc
                }, {animate: false}
                );
                //console.log("switch link");
                break;
              case "afvalverwijdering":
                this.navCtrl.push(AfvalverwijderingPage, {
                  stap: stap,
                  desc: this.desc
                }, {animate: false}
                );
                break;
              default:
                this.presentToast("Error: oefeningen konden niet worden geladen ");
                //  this.navCtrl.popTo( this.navCtrl.getByIndex(1));
                break;
            }
      }
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 100
    });
    toast.present();
  }

}
