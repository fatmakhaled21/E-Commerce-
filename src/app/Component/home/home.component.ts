import { Component, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgFor, UpperCasePipe } from '@angular/common';
import { Product } from '../../interfaces/product';
import { AppRoutingModule } from '../../app.routes';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../search.pipe';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    CarouselModule,
    UpperCasePipe,
    FormsModule,
    SearchPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private productsservice: ProductsService,
    private cartservice: CartService,
    private toastr: ToastrService
  ) {}

  products: Product[] = [];
  categories: any[] = [];
  searchTerms: string = '';

  categoriesSliderOption = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    margin: 0,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 6,
      },
    },
    nav: false,
  };

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };

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
