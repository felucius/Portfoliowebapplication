import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects = 'MY PROJECTS';
  contact = 'CONTACT ME';
  interests = 'MY PERSONAL INTERESTS';
  capabilities = 'MY LIST OF SKILLS';
  introduction ='Junior programmer with a passion for programming and designing.';
}
