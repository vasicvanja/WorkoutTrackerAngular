import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgToastComponent } from "ng-angular-popup";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgToastComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WorkoutTracker';
}
