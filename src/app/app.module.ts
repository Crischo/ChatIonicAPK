import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoguinPage } from '../pages/loguin/loguin';
import { IgnugPage } from '../pages/ignug/ignug';
import { MensajesProvider } from '../providers/mensajes/mensajes';
import { firebase } from '../constantes/credenciales';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CarrerasProvider } from '../providers/carreras/carreras';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoguinPage,
    IgnugPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
 //   AngularFireModule.initializeApp(firebase),
   // AngularFireDatabaseModule, // for database,,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoguinPage,
    IgnugPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MensajesProvider,
    CarrerasProvider,
    CarrerasProvider,
    MensajesProvider
  ]
})
export class AppModule {}
