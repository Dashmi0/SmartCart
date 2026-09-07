import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://127.0.0.1:8000/cart';

  // Notifies components whenever cart changes
  private cartUpdatedSource = new Subject<void>();

  cartUpdated$ = this.cartUpdatedSource.asObservable();

  constructor(private http: HttpClient) {}

  // Add product to cart
  addToCart(productId: number) {

    const user = JSON.parse(localStorage.getItem('user')!);

    const cart = {
      user_id: user.id,
      product_id: productId,
      quantity: 1
    };

    return this.http.post(
      `${this.apiUrl}/`,
      cart
    );
  }

  // Get user's cart
  viewCart(userId: number) {

    return this.http.get(
      `${this.apiUrl}/${userId}`
    );
  }

  // Remove cart item
  removeCart(cartId: number) {

    return this.http.delete(
      `${this.apiUrl}/${cartId}`
    );
  }

  // Update quantity
  updateQuantity(
    cartId: number,
    quantity: number
  ) {

    return this.http.put(
      `${this.apiUrl}/${cartId}`,
      quantity
    );
  }

  // Clear user's cart
  clearCart(userId: number) {

    return this.http.delete(
      `${this.apiUrl}/clear/${userId}`
    );
  }

  // Notify components that cart changed
  notifyCartUpdated() {

    this.cartUpdatedSource.next();

  }

}