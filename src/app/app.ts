import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = signal('angular-user-mng');
  protected readonly titleLower = computed(() => this.title().toLocaleLowerCase());
  changeTitle() {
    this.title.set('OVERLORD');
  }
}
