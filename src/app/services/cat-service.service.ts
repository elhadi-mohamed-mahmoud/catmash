import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../classes/Cat';

@Injectable({
  providedIn: 'root',
})
export class CatServiceService {
  constructor(private http: HttpClient) {}

  getCatlist(): Observable<any> {
    let headers = new HttpHeaders();

    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this.http.get<any>('https://latelier.co/data/cats.json', {
      headers: headers,
    });
  }
}
