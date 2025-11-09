import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgToastComponent } from "ng-angular-popup";
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgToastComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WorkoutTracker';
}
