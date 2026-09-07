import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = "http://127.0.0.1:8000/orders/";

  constructor(private http: HttpClient) {}

  placeOrder(order: any) {
    return this.http.post(this.apiUrl, order);
  }

  getOrders(userId: number) {
    return this.http.get(this.apiUrl + userId);
  }

}