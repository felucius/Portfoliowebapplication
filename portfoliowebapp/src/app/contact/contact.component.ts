import { Component, Input } from '@angular/core'
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations'
import {Contact} from "./contact-object.contact";
import {Router} from "@angular/router";

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

  animations: [
    trigger('contactAnimation', [
      transition('* => *', [
        query('ul', style({
          transform: 'translateX(-100%)'
        })),
        query('ul', stagger('400ms', [
          animate('900ms', style({transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})

export class ContactComponent {
  // Fields
  title = 'Contact';
  show = false;
  router: Router;
  contacts: Contact[];

  constructor(router: Router){
    this.router = router;
    this.createContacts();
  }

  public createContacts(){
    this.contacts = [
      {id: 1, name: 'E-MAIL', image: 'assets/images/iteration3/contact/maillogo.png', hyperLink: null,
        description: 'MAXIME.DE.LANGE@OUTLOOK.COM'},
      {id: 2, name: 'FACEBOOK', image: 'assets/images/iteration3/contact/facebooklogo.jpg', hyperLink: 'https://www.facebook.com/maxime.delange',
        description: 'Click here to view my profile.'},
      {id: 3, name: 'LINKEDIN', image: 'assets/images/iteration3/contact/linkedinlogo.png', hyperLink: 'https://www.linkedin.com/in/maxime-de-lange-867a4165/',
        description: 'Click here to view my profile'},
      {id: 4, name: 'GITHUB', image: 'assets/images/iteration3/contact/githublogo.png', hyperLink: 'https://github.com/felucius',
        description: 'Click here to view my profile'}
    ];
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }

  setHyperLinks(hyperLinkID){
    switch (hyperLinkID){
      case 2:
        location.href = 'https://www.facebook.com/maxime.delange';
        break;
      case 3 :
        location.href = 'https://www.linkedin.com/in/maxime-de-lange-867a4165/';
        break;
      case 4:
        location.href = 'https://github.com/felucius';
        break;
    }
  }
}
