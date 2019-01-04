import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClaseMaterias } from '../../clases/Clase-Materias';

/*
  Generated class for the DocenteAsignaturaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DocenteAsignaturaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DocenteAsignaturaProvider Provider');
  }
  
  getData(codigoPersona: string) {
    return this.http.get<ClaseMaterias>('http://yavirac.edu.ec/ignug/server/persona/leer_filtrado?%20columna=id&tipo_filtro=coincide&filtro='+codigoPersona)
   }
}
