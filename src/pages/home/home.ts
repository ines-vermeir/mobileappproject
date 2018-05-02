import { Component } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { OverzichtService } from '../../services/overzicht.service';
import { Observable } from 'rxjs/Observable';
import { Oefening } from '../../models/Oefening';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  overzichtList$:Observable<Oefening[]>;
  
  constructor(public navCtrl: NavController,private overzicht:OverzichtService) {
    
    

  }

}
