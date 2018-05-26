import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';

/**
 * Generated class for the AfvalverwijderingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-afvalverwijdering',
  templateUrl: 'afvalverwijdering.html',
})
export class AfvalverwijderingPage {

  keuze : string
  vraag : string
  correct : string

  constructor(private alertCtrl: AlertController,public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
    let stap = navParams.get('stap');
    this.vraag = stap.vraag;
    this.correct = stap.antwoord;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AfvalverwijderingPage');
  }

  controle(){
    if(this.keuze == this.correct){
      let alert = this.alertCtrl.create({
      title: 'Correct',
      message: "Antwoord is correct!",
      buttons: [
        {
          text: 'Volgende vraag',
          handler: () => {
            this.navCtrl.pop();
          }
        }]
    });
    alert.present();
    }else{
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: `
        <div class="alert">
          <img src="../../assets/imgs/bom.gif" alt="loading icon">
        </div>
          `,
       duration: 5500
      });

      loading.present();
      let alert = this.alertCtrl.create({
      title: 'Feedback',
      message: this.feedback,
      buttons: [
        {
          text: 'stop',
          role: 'cancel', //cancel of null(geen rol)
          handler: () => {
            this.navCtrl.popTo( this.navCtrl.getByIndex(1));
          }
        },
        {
          text: 'probeer opnieuw',
          handler: () => {
            //this.navCtrl.pop();
          }
        }
      ]
      });
      //alert.present();
      setTimeout(()=>alert.present(),5500);
    }
  }

  mogelijkheden = [
           {naam: "bidon - categorie 1", img: "../../assets/imgs/bidon.svg"},
           {naam: "bidon - categorie 2", img: "../../assets/imgs/bidon.svg"},
           {naam: "bidon - categorie 3", img: "../../assets/imgs/bidon.svg"},
           {naam: "bidon - categorie 4", img: "../../assets/imgs/bidon.svg"},
           {naam: "bidon - categorie 5", img: "../../assets/imgs/bidon.svg"},
           {naam: "bruine fles", img:"../../assets/imgs/bruine fles.svg"},
           {naam: "gootsteen" , img: "../../assets/imgs/sink.svg"}
        ];
}
