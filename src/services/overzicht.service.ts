import { Injectable } from "@angular/core";
import {  AngularFireList } from "angularfire2/database";
import {Oefening} from "../models/Oefening";
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";





@Injectable()
export class OverzichtService {
    public list: FirebaseListObservable<Oefening[]>;
    constructor(public db:AngularFireDatabase){ 
        this.list = db.list('/overzicht/');
        console.log(this.list);

    }
    
}