import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IgnugPage } from '../ignug/ignug';

/**
 * Generated class for the LoguinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loguin',
  templateUrl: 'loguin.html',
})
export class LoguinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoguinPage');
  }
ignug(){
  this.navCtrl.push(IgnugPage);
}
}
