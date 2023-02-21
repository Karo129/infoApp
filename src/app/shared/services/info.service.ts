import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(private http: HttpClient) {}

  getAllInfos$(): Observable<any> {
    const URL =
      'https://newsapi.org/v2/everything?q=Apple&from=2023-02-17&sortBy=popularity&pageSize=10&apiKey=93191a7682eb4d9c88f7f069ad45dd02';
    return this.http.get(URL);
  }

  getInfo(param: any): Observable<any> {
    const URL2 =
      'https://newsapi.org/v2/top-headlines?country=' +
      param.country +
      '&category=' +
      param.category +
      '&apiKey=93191a7682eb4d9c88f7f069ad45dd02';

    return this.http.get(URL2);
  }

  getInfoBusiness(): Observable<any> {
    const URLbusiness =
      '  https://newsapi.org/v2/top-headlines?category=business&apiKey=93191a7682eb4d9c88f7f069ad45dd02';
    return this.http.get(URLbusiness);
  }

  getInfoHealth(): Observable<any> {
    const URLhealth =
      '  https://newsapi.org/v2/top-headlines?category=health&apiKey=93191a7682eb4d9c88f7f069ad45dd02';
    return this.http.get(URLhealth);
  }

  getInfoTech(): Observable<any> {
    const URLtech =
      '  https://newsapi.org/v2/top-headlines?category=technology&apiKey=93191a7682eb4d9c88f7f069ad45dd02';
    return this.http.get(URLtech);
  }
  getInfoFav(): Observable<any> {
    const URLfav =
      '  https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=93191a7682eb4d9c88f7f069ad45dd02';
    return this.http.get(URLfav);
  }
}
