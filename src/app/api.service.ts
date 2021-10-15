import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  sendToken(token: any): Observable<any> {
    //ici url backend heroku
    return this.http.post('https://huihuihuhuhjhghjf.herokuapp.com/notification', { subscription:token });
  }
}
