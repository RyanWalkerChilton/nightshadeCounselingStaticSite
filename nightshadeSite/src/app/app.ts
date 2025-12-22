import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner';
import { ImageComponent } from './image/image';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BannerComponent, ImageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nightshadeSite');
}
