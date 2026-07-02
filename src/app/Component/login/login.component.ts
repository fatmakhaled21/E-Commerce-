import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private FormBuilder : FormBuilder) {}

  errorMessages : string = '';
  isLoading : boolean = false

    loginForm: FormGroup = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
       Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
     ]),

    });



  handleLogin(): void {

      if (this.loginForm.valid == true) {

        this.isLoading = true;

      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.message == 'success') {
            this.isLoading = false;
localStorage.setItem('eToken', response.token);            this.router.navigate(['/home']);
            console.log('success');
          }
        },
        error: (error) => {
          this.isLoading = false
          this.errorMessages = error.error.message;
          console.log(error);
        }
      });
    }else{
            this.loginForm.markAllAsTouched();
          }
    }

}
