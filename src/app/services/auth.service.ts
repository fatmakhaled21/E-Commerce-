import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient , private Router : Router) {

  }

  saveUserData(){
    if(localStorage.getItem('eToken') != null){

      let encodeTokan:any = localStorage.getItem('eToken');
      let decodeTokan = jwtDecode(encodeTokan);
      //console.log(decodeTokan)
    }
  }

  register(userData:object):Observable<any> {
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData);
  }

  login(userData:object):Observable<any> {
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData);
  }

  logOut(): void{
    localStorage.removeItem('eToken');

    this.Router.navigate(['/login'])
  }

}
