import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { OverzichtPage } from '../overzicht/overzicht';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData : any;
  userData = {"email":"", "password":""};
  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){

    if(this.userData.email && this.userData.password){
      this.authServiceProvider.postData(this.userData, "login").then((result) =>{
        this.responseData=result;
        console.log(this.responseData);
        if(this.responseData.userData){
          localStorage.setItem('userData', JSON.stringify(this.responseData) );
          this.navCtrl.setRoot(OverzichtPage);
          this.navCtrl.push(OverzichtPage);
        }
        else{
          this.presentToast("Please give valid email and password");
        }


      }, (err)=>{

      });
    }
    else{
      this.presentToast("give username and password");
    }


  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
