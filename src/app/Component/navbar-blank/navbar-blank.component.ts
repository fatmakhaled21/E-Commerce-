import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-navbar-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FooterComponent],
  templateUrl: './navbar-blank.component.html',
  styleUrl: './navbar-blank.component.scss'
})
export class NavbarBlankComponent {


  constructor(private authserive : AuthService){}

  LogOutUser(): void{

    this.authserive.logOut();
  }
}
