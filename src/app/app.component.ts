import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoguinPage } from '../pages/loguin/loguin';
//importo firebase con el script dado en la BD
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyAEnGCT9CTj6af9436tBi0dnpDhW1a6IjQ",
  authDomain: "chat3-f6358.firebaseapp.com",
  databaseURL: "https://chat3-f6358.firebaseio.com",
  projectId: "chat3-f6358",
  storageBucket: "",
  messagingSenderId: "169759824186"
  };
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoguinPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp(config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

