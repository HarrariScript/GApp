import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeteoPage } from './meteo';

@NgModule({
  declarations: [
    MeteoPage,
  ],
  imports: [
    IonicPageModule.forChild(MeteoPage),
  ],
})
export class MeteoPageModule {}
