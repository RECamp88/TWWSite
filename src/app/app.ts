import { Component, signal } from '@angular/core';
import { SiteFooter } from './layout/site-footer/site-footer';
import { HomePage } from './pages/home-page/home-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SiteFooter, HomePage],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('twisted-willow-workz-website');
}
