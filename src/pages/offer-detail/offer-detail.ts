import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OffersPage } from '../offers/offers';
import { CheckOutPage } from '../check-out/check-out';

/**
 * Generated class for the OfferDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-detail',
  templateUrl: 'offer-detail.html',
})
export class OfferDetailPage {
  public moedas: number = 10;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferDetailPage');
    this.moedas = this.navParams.get('moedas');
    console.log(this.navParams.get('moedas'));

  }
  goBack() { this.navCtrl.pop(); }
  checkOut() {
    this.navCtrl.push(CheckOutPage, { 'moedas': this.moedas });
  };
  callOff() {
    this.moedas += 100;
    this.navCtrl.push(OffersPage, { 'moedas': this.moedas });
    console.log(this.moedas)
  };
}
