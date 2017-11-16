import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class MeteoService{
  public host = "http://api.openweathermap.org/data/2.5/forecast" ;
  public apiKey = "025ab1e7cd55b75d944162453660225e";

  constructor(private http:HttpClient){}
  search(cityName:string ){
    return this.http.get(this.host+"?q="+cityName+"&APPID="+this.apiKey);
  }
}
