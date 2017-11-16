import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PlacesPage} from "../pages/places/places";
import {MeteoPage} from "../pages/meteo/meteo";
import {GalleryPage} from "../pages/gallery/gallery";
import {HttpClientModule} from "@angular/common/http";
import {GalleryService} from "../services/gallery.service";
import {HideHeaderDirective} from "../directives/hide-header/hide-header";
import {DetailImagePage} from "../pages/detail-image/detail-image";
import {MeteoService} from "../services/meteo.service";
import {InteractionService} from "../services/interaction.service";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlacesPage,
    MeteoPage,
    GalleryPage,
    HideHeaderDirective,
    DetailImagePage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlacesPage,
    MeteoPage,
    GalleryPage,
    DetailImagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GalleryService,
    MeteoService,
    InteractionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
