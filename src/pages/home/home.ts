import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public firebaseProvider: FirebaseProvider ) {

  }
  /*addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
  AddRoot() {
    this.firebaseProvider.AddRoot(this.newItem);
  }
  addAnderItem() {
    this.firebaseProvider.addAnderItem(this.newItem);
  }*/

}
