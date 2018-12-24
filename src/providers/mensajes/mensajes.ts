import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { ChatMensaje } from '../../clases/Chat-Mensajes';

/*
  Generated class for the MensajesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MensajesProvider {

  constructor(public http: HttpClient,
    public angularFireDatabase: AngularFireDatabase) {
console.log('Hello CarrerasProvider Provider');
}

getChatBySalaId() {
//  return this.angularFireDatabase.list("mensajes", ref => ref.orderByChild("salaid").equalTo(salaId)).valueChanges()
return this.angularFireDatabase.list("mensajes", ref => ref.orderByChild("salaid")).valueChanges()   
}

saveMessage(mensaje: ChatMensaje){
 return this.angularFireDatabase.object("mensajes/"+ mensaje.id).set(mensaje);
}

}
