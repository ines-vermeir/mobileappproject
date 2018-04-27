import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriaalSelecterenPage } from './materiaal-selecteren';

@NgModule({
  declarations: [
    MateriaalSelecterenPage,
  ],
  imports: [
    IonicPageModule.forChild(MateriaalSelecterenPage),
  ],
})
export class MateriaalSelecterenPageModule {}
