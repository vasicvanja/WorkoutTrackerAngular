import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ThemeService } from '../../services/theme.service';
import { NgClass, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-header',
  imports: [NgClass, RouterLink, NgIf, LogoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isAdmin: boolean = false;
  isLoggedIn: boolean = false;

  constructor(public themeService: ThemeService, private authService: AuthService) {

  }

  async ngOnInit() {
    this.authService.isUserLoggedIn$().subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });

    this.authService.isUserAdmin$().subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  onLogOutCompleted() {
    this.authService.logout();
  }
}
