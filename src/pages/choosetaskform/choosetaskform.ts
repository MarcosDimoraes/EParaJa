import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EndintroPage } from '../endintro/endintro';

/**
 * Generated class for the ChoosetaskformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choosetaskform',
  templateUrl: 'choosetaskform.html',
})
export class ChoosetaskformPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosetaskformPage');
  }
  goToEndintroPage() {
    this.navCtrl.push(EndintroPage)
  }

}
