import { Component, output } from '@angular/core';

import { ImageComponent } from '../image/image';

@Component({
  selector: 'app-sidebar',
  imports: [ ImageComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  closeSidebar = output<void>();
}
