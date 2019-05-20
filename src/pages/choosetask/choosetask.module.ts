import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosetaskPage } from './choosetask';

@NgModule({
  declarations: [
    ChoosetaskPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosetaskPage),
  ],
})
export class ChoosetaskPageModule {}
