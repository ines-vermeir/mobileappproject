import { Component } from '@angular/core';
import { MenuController, AlertController,IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';


/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  items: Array<{vragen : string}>
  oefeningen: Array<{oefeningen : string}>
  feedbackString: string

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }
  openMenu() {
     this.menuCtrl.open();
   }

presentConfirm() {
  var feedbackString = "geen feedback";
  if(/*pogingen ==*/ true){
      var url_s = "https://ceb1f13c-d64d-4ddc-a4b4-12833d7843eb-bluemix.cloudant.com/projectmobileapps/a956bebe1e340933ff07d45cbc9e94ae";
      $.get(
          url_s,
		        function(data_o) {
              //console.log(data_o);
              var items = data_o.vragen;
                for(let i = 0; i < items.length; i++){
                    //console.log(items[i].vraagid);
                      if(items[i].vraagid == 1){
                          var oefeningen = items[i].oefeningen;
                          console.log(oefeningen);
                            for(let i = 0; i < oefeningen.length; i++){
                                if(oefeningen[i].oefeningId == 1){
                                  console.log(oefeningen[i].feedback);
                                  feedbackString = oefeningen[i].feedback;
                                  console.log(feedbackString);
                                }
                            }
                          }
                      }
                }
              )
    console.log(feedbackString);
    let alert = this.alertCtrl.create({
      title: 'Feedback',
      message: feedbackString,
      buttons: [
        {
          text: 'stop',
          role: 'cancel', //cancel of null(geen rol)
          handler: () => {
            console.log('NOT IMPLEMENTED -> GA TERUG NAAR OVERZICHT');
          }
        },
        {
          text: 'probeer opnieuw',
          handler: () => {
            console.log('NOT IMPLEMENTED -> GA TERUG NAAR DE OEFENING');
          }
        }
      ]
    });
    alert.present();
  }
}


}
