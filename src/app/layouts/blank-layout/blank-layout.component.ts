import { Component } from '@angular/core';
import { NavbarBlankComponent } from "../../Component/navbar-blank/navbar-blank.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarBlankComponent],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss'
})
export class BlankLayoutComponent {

}
