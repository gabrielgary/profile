import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Herosection } from './client/herosection/herosection';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Herosection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basics');
}
