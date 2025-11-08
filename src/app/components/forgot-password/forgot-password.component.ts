import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { ResponseMessages } from '../../const/response-messages';

@Component({
  selector: 'app-forgot-password',
  imports: [NgIf, RouterLink, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {

  public forgotPasswordForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: NgToastService) {

  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email');
  }

  async onForgotPassword() {
    try {
      const email = this.email?.value;
      const { Data, Succeeded, ErrorMessage } = await this.authService.forgotPassword(email);
      if (Succeeded) {
        this.toastService.success(ResponseMessages.Forgot_password_success);
        return Data;
      } else {
        this.toastService.danger(ErrorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
