import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroPage } from '../intro/intro';
import { HomePage } from '../home/home';
import { DecisionPage } from '../decision/decision';

/**
 * Generated class for the EndintroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-endintro',
  templateUrl: 'endintro.html',
})
export class EndintroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public showButton=false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad EndintroPage');
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
