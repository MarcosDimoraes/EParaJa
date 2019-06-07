import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OffersPage } from '../offers/offers';

/**
 * Generated class for the BuyCreditsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-credits',
  templateUrl: 'buy-credits.html',
})
export class BuyCreditsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyCreditsPage');
  }
  buy(moedas: number) {
    this.navCtrl.push(OffersPage, { 'moedas': moedas });
  }
  goBack() { console.log('volta'); this.navCtrl.pop(); }
}
