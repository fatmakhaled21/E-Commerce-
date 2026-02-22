import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { CartComponent } from './Component/cart/cart.component';
import { ProductsComponent } from './Component/products/products.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

export const routes: Routes = [

  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'cart', component: CartComponent},
  {path:'products', component: ProductsComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'brands', component: BrandsComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'**', component: NotFoundComponent}
];
