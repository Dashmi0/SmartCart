import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl="http://127.0.0.1:8000/products";

  constructor(private http:HttpClient){}

  getProducts(){
    return this.http.get(this.apiUrl);
  }
  getProduct(id:number){
  return this.http.get(`${this.apiUrl}/${id}`);
  }

}
