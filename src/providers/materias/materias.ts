import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClaseMaterias } from '../../clases/Clase-Materias';

/*
  Generated class for the MateriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MateriasProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MateriasProvider Provider');
  }
  getData() {
    return this.http.get<ClaseMaterias[]>('http://yavirac.edu.ec/ignug/server/chat/Asignatura/leer');
   }
}

