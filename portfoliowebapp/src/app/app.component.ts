import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projects = 'PROJECTS I HAVE WORKED ON';
  contact = 'CONTACT MAXIME DE LANGE';
  interests = 'WHAT ARE MY PERSONAL INTERESTS';
  capabilities = 'WHAT IS MY LIST OF SKILLS';
  introduction ='Junior programmer with a passion for programming and designing.';
}
