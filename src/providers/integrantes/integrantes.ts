import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IntegrantesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IntegrantesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello IntegrantesProvider Provider');
  }
  getData() {
   // return this.http.get<ClaseIntegrantes[]>('URL a pegar');
   }
}
