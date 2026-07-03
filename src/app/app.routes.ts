import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authGuard } from './Guatd/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: BlankLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./Component/home/home.component').then(
            (c) => c.HomeComponent,
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./Component/cart/cart.component').then(
            (c) => c.CartComponent,
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./Component/products/products.component').then(
            (c) => c.ProductsComponent,
          ),
      },
      {
        path: 'details/:id',
        loadComponent: () =>
          import('./Component/details/details.component').then(
            (c) => c.DetailsComponent,
          ),
      },
    ],
  },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      //{path: '', redirectTo: 'login', pathMatch: 'full'},
      {path:'register', component: RegisterComponent},
      {path:'login', component: LoginComponent},

    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./Component/not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
