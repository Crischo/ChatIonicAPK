import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IgnugPage } from '../ignug/ignug';
import { LoguinProvider } from '../../providers/loguin/loguin';
import { ClasePersona } from '../../clases/Clase-Persona';

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
  usu: string = "";
  con: string = "";
  errorw: boolean = false;
  mapeo: Promise<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loguinProvider: LoguinProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoguinPage');
  }
ignug(){

this.loguinProvider.getUsuario(this.usu.trim() , this.con.trim()).toPromise()
 .then( r=> {
console.log("leido rrrrrrrrrrrrrrrr   ",r);
//var compara =r.id;
var de = r['Persona'] as ClasePersona;
console.log("leido de    ",de.id);
if (de.id ==null) {
 this.errorw = true;
 console.log("No entro")
} else {
  console.log("entro")
  this.navCtrl.push(IgnugPage);
}
})
.catch( e => {
 return 'error';
 console.log(e);
});

 



}


/*
 var idv = compara.map(({Persona}) => Persona);
console.log(idv)
if(idv != null){
  console.log("correcto"+idv)

  this.navCtrl.push(IgnugPage);
}else{
 this.error = true;
  console.log("valor id "+idv)
}
*/

}
