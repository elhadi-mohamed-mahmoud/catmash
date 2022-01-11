import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment.prod';
import { Cat } from '../classes/Cat';

@Injectable({
  providedIn: 'root',
})
export class CatServiceService {
  getScore() {
    return this.http.get<any>(`${baseUrl}cats/score`);
  }
  constructor(private http: HttpClient) {}

  getCatlist(): Observable<any> {
    return this.http.get<any>(`${baseUrl}cats/list`);
  }

  vote(cat: Cat): Observable<any> {
    return this.http.post(`${baseUrl}cats/vote`, cat);
  }
}
