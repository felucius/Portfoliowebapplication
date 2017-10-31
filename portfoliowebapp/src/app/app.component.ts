import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  projects = 'PROJECTS';
  contact = 'CONTACT';
  interests = 'INTERESTS';
  capabilities = 'SKILLS';
  home = 'HOME';

  // Fields
  router: Router;
  section;
  visible: boolean = true;
  hide: boolean = false;

  constructor(router: Router){
    this.router = router;
  }

  // Opens div on toggle.
  toggleDiv(elementID){
    var div = document.getElementById(elementID);

    if(this.visible){
      div.style.display = 'block';
      //this.visible =  false;
      //this.hide = true;

      // Animation movement
      this.myMove();
    }else{
      div.style.display = 'none';
      this.visible = true;
      this.hide = false;
    }
  }

  myMove() {
    var elem = document.getElementById("animation");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        //elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
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

  navbarToggle = true;
  toggleNavigationBar(element){
    var div = document.getElementById(element);
    if(this.navbarToggle){
      div.style.display = 'none';
      this.navbarToggle = false;
    }else{
      this.navbarToggle = true;
      div.style.display = 'block';
    }
  }
}

