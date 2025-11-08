import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Register } from '../../models/register';
import ValidateForm from '../../helpers/validate-form';

@Component({
  selector: 'app-register',
  imports: [NgIf, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: NgToastService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get userName() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get birthDate() {
    return this.registerForm.get('birthDate');
  }

  onRegister() {
    if (this.registerForm.valid) {
      const registerObj: Register = {
        FirstName: this.firstName?.value,
        LastName: this.lastName?.value,
        Username: this.userName?.value,
        Email: this.email?.value,
        PhoneNumber: this.phoneNumber?.value,
        Password: this.password?.value,
        BirthDate: this.birthDate?.value
      };

      this.authService.register(registerObj)
        .subscribe({
          next: (res: any) => {
            this.toastService.success(res.ErrorMessage);
            this.registerForm.reset();
            this.router.navigate(['login']);
          },
          error: (err) => {
            this.toastService.danger(err?.error.ErrorMessage, 'Registration Failed');
          }
        })
    }
    else {
      ValidateForm.validateAllFormFields(this.registerForm);
      alert("Your form is invalid!")
    }
  }
}
