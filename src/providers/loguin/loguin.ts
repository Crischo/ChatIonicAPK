import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClasePersona } from '../../clases/Clase-Persona';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild} from '@angular/core';

/*
  Generated class for the LoguinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoguinProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoguinProvider Provider');
  }

  getUsuario(usu: string, con: String) {
    console.log("usuario  ",usu);
    console.log("contraseña ",con);
                           
    return this.http.get('http://yavirac.edu.ec/ignug/server/login/cuenta?email='+usu+'&clave='+con+'');
    
    
    }
 
}


