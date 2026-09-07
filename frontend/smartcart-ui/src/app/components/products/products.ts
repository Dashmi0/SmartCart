import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  searchText = '';

  selectedCategory = 'All';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {

    this.productService.getProducts().subscribe({

      next: (data: any) => {

        console.log("Products received:", data);

        this.products = data;

      },

      error: (err) => {

        console.error("Error:", err);

      }

    });

  }


  // Add product to cart
  addToCart(productId: number) {

    console.log("Adding product:", productId);

    this.cartService.addToCart(productId).subscribe({

      next: (response) => {

        console.log("Cart response:", response);

        // Tell CartComponent that cart changed
        this.cartService.notifyCartUpdated();

        alert("Added to Cart!");

      },

      error: (err) => {

        console.error("Error adding to cart:", err);

        alert("Unable to add to cart");

      }

    });

  }


  // Search + category filtering
  filteredProducts() {

    return this.products.filter(product => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            this.searchText.toLowerCase()
          );

      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;

    });

  }

}