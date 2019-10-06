import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataTableItems } from '../_interfaces/data.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://jsonplaceholder.typicode.com/photos';

constructor(private http: HttpClient) { }

getDataList(): Observable<DataTableItems[]> {
  return this.http.get<DataTableItems[]>(`${this.baseUrl}`);
  }

}
