import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadcontratantePage } from '../cadcontratante/cadcontratante';
import { CadFornecedorPage } from '../cad-fornecedor/cad-fornecedor';

/**
 * Generated class for the DecisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-decision',
  templateUrl: 'decision.html',
})
export class DecisionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecisionPage');
  }

  goToCadcontratantePage() {
    this.navCtrl.push(CadcontratantePage);
  }
  souFornecedor() {
    this.navCtrl.push(CadFornecedorPage);
  }

}
