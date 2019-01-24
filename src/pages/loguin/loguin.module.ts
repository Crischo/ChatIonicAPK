import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoguinPage } from './loguin';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    LoguinPage,
  ],
  imports: [
    IonicPageModule.forChild(LoguinPage),
    FormsModule
  ],
})
export class LoguinPageModule {}
