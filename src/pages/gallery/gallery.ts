import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {GalleryService} from "../../services/gallery.service";

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
  private keyWord: string = ""
  private images: any = {hits: []};
  private page: number = 1;
  private size: number = 10;
  private totalePages:number;
  public dataHandler:any = {hits: []}
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private galleryService: GalleryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  search() {
    this.galleryService.search(this.keyWord, this.size, this.page)
      .subscribe(data =>
        {
          this.dataHandler = data ;
          this.totalePages = this.dataHandler.totalHits / this.size ;
          if(this.totalePages % this.size !=0 ) ++this.totalePages;
          this.dataHandler.hits.forEach(h=> {
             this.images.hits.push(h);
          })
        },
        err =>
          console.log(err)
      )
  }

  doInfinite(event) {
    if(this.page < this.totalePages){
      ++this.page;
      this.search();
      event.complete();
    }

  }
}
