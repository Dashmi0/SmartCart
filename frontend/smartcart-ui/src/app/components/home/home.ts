import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  constructor(private router: Router){}

  products(){
    this.router.navigate(['/products']);
  }

  cart(){
    this.router.navigate(['/cart']);
  }

  orders(){
    this.router.navigate(['/orders']);
  }

}