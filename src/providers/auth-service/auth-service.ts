import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';


let apiURL = "http://dtsl.ehb.be/~stijn.rooselaers/PHP-Slim-Restful/api/index.php/";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type){
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post(apiURL+type, JSON.stringify(credentials), {headers: headers}).subscribe(res=>{
        resolve(res.json());
      },(err)=>{
        reject(err);

      });
    })
  }
}
