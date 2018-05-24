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
           null,
           "bidon1",
           "bidon2",
           "bidon3",
            "bidon4",
            "bidon5",
            "bruine fles"
         ];
const feedback = "C1.V1 = C2.V2 ";
const vraag = "Zoekt de juiste bidon.";
