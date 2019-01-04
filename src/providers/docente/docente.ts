import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClasePersona } from '../../clases/Clase-Persona';
import { ClaseMaterias } from '../../clases/Clase-Materias';

/*
  Generated class for the DocenteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DocenteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DocenteProvider Provider');
  }
  getPersona(){

    return this.http.get<ClaseMaterias[]>('http://www.yavirac.edu.ec/Ignug/server/docenteasignatura/leer');
  }
}
