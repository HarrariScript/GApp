import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  private apiKey = "7005797-664590099d4013b34d7fc6d1d"
  private keyWord: string = ""
  private images:any;
  public vm = this ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  search() {
    console.log("sent");
    this.http.get("https://pixabay.com/api/?key=" + this.apiKey + "&q=" + this.keyWord + "&per_page=3&page=1")
      .subscribe(data => {
             this.images = data ;
             console.log(this.images)
        },
        err => {
          console.log(err)
        })

  }
}
