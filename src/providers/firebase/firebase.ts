import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient, public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }
  getItems() {
    return this.afd.list('/Lijst/');
  }
  addAnderItem(name){
    this.afd.list('/Lijst/item 1').push(name);
  }
  AddRoot(name){
    this.afd.list('/').push(name);
  }
 
  addItem(name) {
    this.afd.list('/Lijst/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/Lijst/').remove(id);
  }

}
