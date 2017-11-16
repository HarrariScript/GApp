import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {GalleryService} from "../../services/gallery.service";
import {DetailImagePage} from "../detail-image/detail-image";

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
  public dataHandler:any = {hits: []};
  private lastKeyWord:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private galleryService: GalleryService , public loadingCtrl: LoadingController ,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  search(event) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    })
    loading.present();
     if(this.lastKeyWord!=this.keyWord) { this.images.hits = []; this.lastKeyWord = this.keyWord; }
    this.galleryService.search(this.keyWord, this.size, this.page)
      .subscribe(data =>
        {
          this.dataHandler = data ;
          if(this.dataHandler.totalHits==0) this.presentToast('we dont find any image ');
          this.totalePages = this.dataHandler.totalHits / this.size ;
          if(this.totalePages % this.size !=0 ) ++this.totalePages;
          this.dataHandler.hits.forEach(h=> {
             this.images.hits.push(h);
          })
          if(event){
            event.complete();
          }
           loading.dismiss();
        },
        err =>
        {
          console.log(err)
          loading.dismiss();
          this.presentToast('your internet connection appears to be offline');
        }
      )
  }

  doInfinite(event) {
    if(this.page < this.totalePages){
      ++this.page;
      this.search(event);
    }

  }

  onDetailImage(i){
    this.navCtrl.push(DetailImagePage , {image:i});
  }
}
