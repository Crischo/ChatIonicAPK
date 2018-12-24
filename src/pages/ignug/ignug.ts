import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrerasProvider } from '../../providers/carreras/carreras'
import { ChatNombreSala } from '../../clases/Chat-Nombre-Sala';

/**
 * Generated class for the IgnugPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ignug',
  templateUrl: 'ignug.html',
})
export class IgnugPage {
carreras: ChatNombreSala[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public carreraService: CarrerasProvider) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IgnugPage');
    this.carreraService.getData().subscribe(data => {
      this.carreras = data;
      console.log("las carreras son " , this.carreras)
    });
  }

}
