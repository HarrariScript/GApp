import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MeteoService} from "../../services/meteo.service";

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  private meteo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private meteoService :MeteoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }
  onGetMeteo(dataForm){
     this.meteoService.search(dataForm.city)
       .subscribe(data=>{
         this.meteo = data ;
       },err=> {
          console.log(err.status)
       })
  }
}
