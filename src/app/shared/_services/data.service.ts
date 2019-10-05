import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://jsonplaceholder.typicode.com/photos';

constructor(private http: HttpClient) { }

getDataList(): Observable<any> {
  return this.http.get(`${this.baseUrl}`);
  }

}
