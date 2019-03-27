import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface payData {
  message: string,
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class PayService {

  baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  submitCash(bid, amount, isCash){
    console.log("submitted via cash");
    return this.http.post<payData>(`${this.baseUrl}/pay`, { bid, amount, isCash });
  }
  // for this project, although we get input from customer about payment info, we do not check whether
  // payment is valid nor do we store it in the DB, thus we don't need to pass it onto the backend to process the information.
  submitCreditCard(bid, amount, isCash) {
    console.log("submitted via credit");
    return this.http.post<payData>(`${this.baseUrl}/pay`, { bid, amount, isCash });
  }
}
