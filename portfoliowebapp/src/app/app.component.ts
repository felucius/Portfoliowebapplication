import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  projects = 'MY PROJECTS';
  contact = 'CONTACT ME';
  interests = 'MY PERSONAL INTERESTS';
  capabilities = 'MY LIST OF SKILLS';
  introduction ='Junior programmer with a passion for programming and designing.';

  router: Router;
  section;
  constructor(router: Router){
    this.router = router;
  }

  // Find the location and the fragment location of the page.
  goToAnchor(page, anchor):void{
    this.section = anchor;
    this.router.navigate([page], {fragment: anchor});
  }

  // Initializes the scrolling.
  doScroll() {
    if (!this.section) {
      return;
    }
    try {
      var elements = document.getElementById(this.section);

      elements.scrollIntoView();
    }
    finally{
      this.section = null;
    }
  }

  // Initialize the new view. This leads to the contact page.
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScroll();
      this.section= null;
    });
  }
}

