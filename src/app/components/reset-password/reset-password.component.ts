import { Component, OnInit } from '@angular/core';
import { ResetPassword } from '../../models/reset-password';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
import { ResponseMessages } from '../../const/response-messages';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  imports: [NgIf, RouterLink, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {

  resetPassword!: ResetPassword;
  resetPasswordForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private toastService: NgToastService) {

  }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords() });
  }

  get newPassword() {
    return this.resetPasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }

  async onResetPassword() {
    const token = this.route.snapshot.queryParams['token'];
    const email = this.route.snapshot.queryParams['email'];
    const newPassword = this.newPassword?.value;
    const confirmPassword = this.confirmPassword?.value;
    this.resetPassword = new ResetPassword(email, token, newPassword, confirmPassword);
    try {
      const { Data, Succeeded, ErrorMessage } = await this.authService.resetPassword(this.resetPassword);
      if (Succeeded) {
        this.toastService.success(ResponseMessages.Password_successful_reset);
        this.router.navigate(['/login']);
        return Data;
      } else {
        this.toastService.danger(ErrorMessage);
      }
    } catch (error) {
      console.error(error);
    }
  }

  comparePasswords(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const newPassword = control.get('newPassword')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      return newPassword === confirmPassword ? null : { 'passwordMismatch': true };
    };
  }
}
