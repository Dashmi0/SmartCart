import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from '../../services/cart';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];


  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}


  ngOnInit(): void {

    // Load cart when page opens
    this.loadCart();


    // Automatically reload cart whenever cart changes
    this.cartService.cartUpdated$.subscribe(() => {

      console.log("Cart updated - loading again");

      this.loadCart();

    });

  }


  // Load cart from backend
  loadCart() {

    const user = JSON.parse(
      localStorage.getItem('user')!
    );

    console.log("User:", user);


    this.cartService.viewCart(user.id).subscribe({

      next: (data: any) => {

        console.log("Cart Data:", data);

        this.cartItems = data;

      },

      error: (err: any) => {

        console.log("Cart error:", err);

      }

    });

  }


  // Calculate total
  getTotal(): number {

    let total = 0;

    for (let item of this.cartItems) {

      total +=
        item.price *
        item.quantity;

    }

    return total;

  }


  // Place order
  placeOrder() {

    const user = JSON.parse(
      localStorage.getItem('user')!
    );


    // Don't place empty order
    if (this.cartItems.length === 0) {

      alert("Your cart is empty");

      return;

    }


    const order = {

      user_id: user.id,

      total_amount: this.getTotal()

    };


    // Create order
    this.orderService.placeOrder(order).subscribe({

      next: (response) => {

        console.log("Order response:", response);

        alert("Order Placed Successfully");


        // Clear cart after order
        this.cartService.clearCart(user.id).subscribe({

          next: () => {

            console.log("Cart cleared");

            // Notify cart that it changed
            this.cartService.notifyCartUpdated();

          },

          error: (err) => {

            console.log(
              "Unable to clear cart:",
              err
            );

          }

        });

      },


      error: (error) => {

        alert("Unable to Place Order");

        console.log(error);

      }

    });

  }


  // Remove item
  removeItem(cartId: number) {

    this.cartService.removeCart(cartId).subscribe({

      next: () => {

        console.log("Item removed:", cartId);

        alert("Item Removed Successfully");


        // Notify cart
        this.cartService.notifyCartUpdated();

      },

      error: (err: any) => {

        console.log(err);

        alert("Unable to remove item");

      }

    });

  }


  // Increase quantity
  increaseQuantity(item: any) {

    item.quantity++;

    this.updateQuantity(item);

  }


  // Decrease quantity
  decreaseQuantity(item: any) {

    if (item.quantity > 1) {

      item.quantity--;

      this.updateQuantity(item);

    }

    else {

      // If quantity is already 1,
      // remove the item
      this.removeItem(item.id);

    }

  }


  // Update quantity in backend
  updateQuantity(item: any) {

    this.cartService
      .updateQuantity(
        item.id,
        item.quantity
      )
      .subscribe({

        next: () => {

          console.log(
            "Quantity updated"
          );

          // Notify cart
          this.cartService.notifyCartUpdated();

        },

        error: (err: any) => {

          console.log(
            "Quantity update error:",
            err
          );

        }

      });

  }

}