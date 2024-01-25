import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
  <img [src]="randomImage" alt="Imagen aleatoria">

  `
})

export class AppComponent {
  title = 'angular-imagen';
  images = [
    'assets/cr7.jpg',
    'assets/mbappe.jpg',
    'assets/davies.jpg',
    'assets/jude.jpg',
  ];
  randomImage = this.getRandomImage();

  getRandomImage() {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }
}