import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabotafelPage } from './labotafel';

@NgModule({
  declarations: [
    LabotafelPage,
  ],
  imports: [
    IonicPageModule.forChild(LabotafelPage),
  ],
  entryComponents: [
    LabotafelPage,
  ]
})
export class LabotafelPageModule {}
