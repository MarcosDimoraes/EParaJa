import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChoosetaskPage } from '../choosetask/choosetask';

/**
 * Generated class for the CadcontratantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadcontratante',
  templateUrl: 'cadcontratante.html',
})
export class CadcontratantePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public bgButton = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadcontratantePage');
  }
  goToChoosetaskPage() {
    this.navCtrl.push(ChoosetaskPage)
  }

}
