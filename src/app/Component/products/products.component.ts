import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { SearchPipe } from '../../search.pipe';
import { FormsModule } from '@angular/forms';
import { NgFor, UpperCasePipe } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
     NgFor,
    RouterLink,
    CarouselModule,
    UpperCasePipe,
    FormsModule,
    SearchPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  constructor(
      private productsservice: ProductsService,
      private cartservice: CartService,
      private toastr: ToastrService
    ) {}

     products: Product[] = [];
      categories: any[] = [];
      searchTerms: string = '';

ngOnInit(): void {
    this.productsservice.getAllProducts().subscribe({
      next: (Response: any) => {
        this.products = Response.data;
      },
    });

    this.productsservice.getAllCategories().subscribe({
      next: (response: any) => {
        this.categories = response.data;
      },
    });
  }
   addCart(id: string): void {
    this.cartservice.addToCart(id).subscribe({
      next: (response) => {
        this.toastr.success('Product added to cart successfully', 'Success', {

        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
