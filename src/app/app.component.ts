import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAuthComponent } from "./Component/navbar-auth/navbar-auth.component";
import { NavbarBlankComponent } from "./Component/navbar-blank/navbar-blank.component";
import { FooterComponent } from "./Component/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarAuthComponent, NavbarBlankComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-commerce';
}
