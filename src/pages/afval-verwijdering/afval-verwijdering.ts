import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AfvalVerwijderingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-afval-verwijdering',
  templateUrl: 'afval-verwijdering.html',
})
export class AfvalVerwijderingPage {
    lijstMogelijkheden = [];
    mogelijkheden = [];
    correct;
    feedback;
    vraag;
    isVisibleForm;
    geselecteerd;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      for (let entry of mogelijkheden) {
          if (entry){
              this.mogelijkheden.push(entry);
          }
      }
      this.correct = correct;
      this.feedback = feedback;
      this.vraag = vraag;
      this.isVisibleForm = false;
      console.log(mogelijkheden);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfvalVerwijderingPage');
  }
    
     valideren(){
        if (this.geselecteerd == this.correct){
            console.log("nice");
        }else{
            this.isVisibleForm = true;
        }
    }
    
    setTest(mogelijkheid){
        this.geselecteerd = mogelijkheid;
    }

    
}

const correct = "bruine fles";
const mogelijkheden = [
          
            {naam: "bidon1", img: "fout.png"},
            {naam: "bidon2", img: "fout.png"},
            {naam: "bidon3", img: "fout.png"},
            {naam: "bidon4", img: "fout.png"},
            {naam: "bidon5", img: "fout.png"},
            {naam: "bruine fles", img:"juist.jpg"}
         ];
const feedback = "C1.V1 = C2.V2 ";
const vraag = "Zoekt de juiste bidon.";
