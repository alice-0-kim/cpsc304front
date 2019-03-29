import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ListcustService {
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  getListCust(date){
    return this.http.post<any>(`${this.baseUrl}/listcust`, { date });
  }
}
