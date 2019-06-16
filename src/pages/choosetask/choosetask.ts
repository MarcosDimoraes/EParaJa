import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChoosetaskformPage } from '../choosetaskform/choosetaskform';

/**
 * Generated class for the ChoosetaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choosetask',
  templateUrl: 'choosetask.html',
})
export class ChoosetaskPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosetaskPage');
  }
  goToChoosetaskformPage(service:string) {
    this.navCtrl.push(ChoosetaskformPage,{'service':service});
  }

}
