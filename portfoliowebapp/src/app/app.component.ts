import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects = 'Projects';
  contact = 'Contact';
  interests = 'Interests';
  capabilities = 'Skills';
}
