import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderService } from '../../services/order';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit(): void {

    this.loadOrders();

  }

  loadOrders() {

    const user = JSON.parse(
      localStorage.getItem('user')!
    );

    console.log("Loading orders for user:", user.id);

    this.orderService
      .getOrders(user.id)
      .subscribe({

        next: (data: any) => {

          console.log(
            "Orders received:",
            data
          );

          this.orders = data;

        },

        error: (err: any) => {

          console.log(
            "Orders error:",
            err
          );

        }

      });

  }

}