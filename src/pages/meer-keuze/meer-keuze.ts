import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MeerKeuzePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meer-keuze',
  templateUrl: 'meer-keuze.html',
})
export class MeerKeuzePage {
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
    console.log('ionViewDidLoad MeerKeuzePage');
  }

    valideren(){
        if (this.geselecteerd == this.correct){
            console.log("nice");
        }else{
            alert(this.feedback)
        }
    }
    test(){
        
    }
    setTest(mogelijkheid){
        this.geselecteerd = mogelijkheid;
    }

}


const lijst = [
    {
       "antwoord": {
         "correct": "5 ml",
         "mogelijkheden": [
           null,
           "10 ml",
           "5 ml",
           "15 ml"
         ]
       },
       "feedback": "C1.V1 = C2.V2 ",
       "type": "keuzevraag",
       "vraag": "Maak een stockoplossing KMnO4 0,001 M (100 ml) uit een kant en klare 0,02 M oplossing. Hoeveel ml neem je uit de 0,02 M oplossing?"
     }
];
const correct = "5 ml";
const mogelijkheden = [
           null,
           "10 ml",
           "5 ml",
           "15 ml"
         ];
const feedback = "C1.V1 = C2.V2 ";
const vraag = "Maak een stockoplossing KMnO4 0,001 M (100 ml) uit een kant en klare 0,02 M oplossing. Hoeveel ml neem je uit de 0,02 M oplossing?";
