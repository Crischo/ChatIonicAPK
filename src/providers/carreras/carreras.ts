import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatMensaje } from '../../clases/Chat-Mensajes';
import { ChatNombreSala } from '../../clases/Chat-Nombre-Sala';

/*
  Generated class for the CarrerasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrerasProvider {

  constructor(public http: HttpClient
       ) {
    console.log('Hello CarrerasProvider Provider');
  }

  getData() {
    return this.http.get<ChatNombreSala[]>('http://yavirac.edu.ec/ignug/server/carrera/leer');
   }
}
