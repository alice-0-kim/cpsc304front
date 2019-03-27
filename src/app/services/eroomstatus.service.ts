import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Room } from './room';
import { Observable, throwError } from 'rxjs';

interface myData {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EroomstatusService {
 baseUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
   rooms: Room[];

    getRoomStatus(): Observable<Object[]> {
      console.log("hi");
      return this.http.get<myData[]>(`${this.baseUrl}/roomstatus`)
    }
}
