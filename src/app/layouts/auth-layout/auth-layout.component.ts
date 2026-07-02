import { Component } from '@angular/core';
import { NavbarAuthComponent } from "../../Component/navbar-auth/navbar-auth.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../Component/footer/footer.component";

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarAuthComponent, FooterComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
