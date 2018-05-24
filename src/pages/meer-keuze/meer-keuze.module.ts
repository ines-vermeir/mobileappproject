import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeerKeuzePage } from './meer-keuze';

@NgModule({
  declarations: [
    MeerKeuzePage,
  ],
  imports: [
    IonicPageModule.forChild(MeerKeuzePage),
  ],
})
export class MeerKeuzePageModule {}
