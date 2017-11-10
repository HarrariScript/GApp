import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class GalleryService {
  public host = "https://pixabay.com/api/" ;
  public apiKey = "7005797-664590099d4013b34d7fc6d1d";
  constructor(private http:HttpClient){}
  search(keyWord:string , size:number , page:number){
      return this.http.get(this.host+"?key="+this.apiKey+"&q="+keyWord+"&per_page="+size+"&page="+page)
  }
}
