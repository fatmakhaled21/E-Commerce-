import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  loginForm: any;

  constructor(private authService: AuthService , private router: Router) {}

  errorMessages : string = '';
  isLoading : boolean = false ;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  }, { validators: [this.confirmPassword] } as FormControlOptions);

  confirmPassword(group: FormGroup):void{
    let password = group.get('password')?.value;
    let rePassword = group.get('rePassword')?.value;
    if(rePassword?.value == '') {
      rePassword.setErrors({required: true});
    }else if(password.value == rePassword.value){
      rePassword.setErrors({mismatch: true});
    }
  }

  handleForm(): void {
    //console.log(this.registerForm.value);

    if (this.registerForm.valid == true) {

      this.isLoading = true ;

      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.message == 'success') {
            this.router.navigate(['/login']);
            console.log('success');
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessages = error.error.message;
          console.log(error);
        }
      });
    }else{
            this.registerForm.markAllAsTouched();
          }
  }
}
