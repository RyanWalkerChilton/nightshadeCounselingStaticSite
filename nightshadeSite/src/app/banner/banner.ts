import { Component, signal } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-banner',
  imports: [SidebarComponent],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class BannerComponent {
  sidebarOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update(value => !value);
  }
}
