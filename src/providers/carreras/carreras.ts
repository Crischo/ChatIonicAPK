import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClaseCarreras } from '../../clases/Clase-Carreras';


/*
  Generated class for the CarrerasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrerasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CarrerasProvider Provider');
  }
  getData() {
    return this.http.get<ClaseCarreras[]>('http://yavirac.edu.ec/ignug/server/chat/Carreras/leer');
   }
}
