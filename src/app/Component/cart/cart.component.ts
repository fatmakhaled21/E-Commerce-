import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  constructor(private cartservice: CartService) {}

  cartDetails: any = {};

  ngOnInit(): void {
    this.cartservice.getusercart().subscribe({
      next: (response) => {
        console.log(response);
        this.cartDetails = response.data;
        console.log(this.cartDetails);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  updateCount(productId: string, count: number) {
    if (count < 1) return;

    this.cartservice.updateCartCount(productId, count).subscribe({
      next: (response) => {
        this.cartDetails = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removeItem(productId: string) {
    this.cartservice.removeItem(productId).subscribe({
      next: (response) => {
        this.cartDetails = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}


