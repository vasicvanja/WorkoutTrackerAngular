import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgToastComponent } from "ng-angular-popup";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WorkoutTracker';
}
