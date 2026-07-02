import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private HtppClient: HttpClient ) { }

 getHeaders() {
  return {
    token: localStorage.getItem('eToken') || ''
  };
}

 addToCart(productId: string): Observable<any> {
  return this.HtppClient.post(
    'https://ecommerce.routemisr.com/api/v1/cart',
    { productId }
  );
}

getusercart(): Observable<any> {
  return this.HtppClient.get(
    'https://ecommerce.routemisr.com/api/v1/cart'
  );
}
updateCartCount(productId: string, count: number): Observable<any> {
  return this.HtppClient.put(
    `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    { count }
  );
}
 removeItem(productId: string): Observable<any> {
    return this.HtppClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`
    );
  }


}
