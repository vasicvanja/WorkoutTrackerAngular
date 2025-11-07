import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { Login } from '../../models/login';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validate-form';

@Component({
  selector: 'app-login',
  imports: [NgIf, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: NgToastService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      const loginObj: Login = {
        Username: this.loginForm.get('username')?.value,
        Password: this.loginForm.get('password')?.value
      };

      this.authService.login(loginObj).subscribe({
        next: (res) => {
          this.toastService.success(res.ErrorMessage);
          this.loginForm.reset();
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.toastService.danger(err?.error?.ErrorMessage, 'Login Failed');
        }
      });
    } else {
      ValidateForm.validateAllFormFields(this.loginForm);
      this.toastService.danger('Please fill in all required fields.', 'Form Invalid');
    }
  }
}
