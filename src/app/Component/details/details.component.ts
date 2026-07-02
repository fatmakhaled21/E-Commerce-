import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { NgFor, NgIf } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule, NgFor],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private productsservice: ProductsService,
    private CartService: CartService,
    private toastr: ToastrService
  ) {}
  productDetails: Product = {} as Product;

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
    this.ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let idproduct: any = params.get('id'); // catech the id
        this.productsservice.getProductsDetails(idproduct).subscribe({
          next: (respon) => {
            this.productDetails = respon.data;
            console.log(respon.data);
          },
        });
      },
    });
  }
  addCart(id: string): void {
    this.CartService.addToCart(id).subscribe({
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
