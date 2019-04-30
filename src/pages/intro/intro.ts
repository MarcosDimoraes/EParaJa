import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DecisionPage } from '../decision/decision';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

  }
  public showButton = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
  goToIntroPage() {
  	this.navCtrl.push(IntroPage)
  }

  goToHomePage() {
    this.navCtrl.push(HomePage)
  }

  goToDecisionPage() {
    this.navCtrl.push(DecisionPage)
  }
  lastSlide() {
    this.showButton=true;
  }

}
