import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-logout',
  imports: [RouterLink],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  @Output() logoutCompleted: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthService, private toastService: NgToastService) {

  }

  onLogout() {
    this.authService.logout().subscribe({
      next: (res: any) => {
        this.toastService.success(res);
        this.logoutCompleted.emit();
      },
      error: (err) => {
        console.log(err);
        this.toastService.danger(err?.error.ErrorMessage);
      }
    });
  }
}
