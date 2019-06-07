import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OfferDetailPage } from '../offer-detail/offer-detail';

/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  public moedas: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
    this.moedas = this.navParams.get('moedas');
  }
  getOffer() {
    this.navCtrl.push(OfferDetailPage);
  }
  goBack() { this.navCtrl.pop(); }

}
