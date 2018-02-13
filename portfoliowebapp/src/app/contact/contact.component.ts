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
      {id: 1, name: 'Email', image: 'fas fa-envelope', hyperLink: null,
        description: 'maxime.de.lange@outlook.com'},
      {id: 2, name: 'Facebook', image: 'fab fa-facebook-square', hyperLink: 'https://www.facebook.com/maxime.delange',
        description: 'Facbook profile and interests.'},
      {id: 3, name: 'Linkedin', image: 'fab fa-linkedin', hyperLink: 'https://www.linkedin.com/in/maxime-de-lange-867a4165/',
        description: 'Linkedin profile and interests'},
      {id: 4, name: 'Github', image: 'fab fa-github-square', hyperLink: 'https://github.com/felucius',
        description: 'Git projects and source code'},
      {id: 5, name: 'Reddit', image: 'fab fa-reddit-square', hyperLink: 'https://www.reddit.com/user/felucius',
        description: 'Social community and stories'},
      {id: 6, name: 'Stack overflow', image: 'fab fa-stack-overflow', hyperLink: 'https://stackoverflow.com/users/4415306/maxime-de-lange',
        description: 'Contribution to the community'},
      {id: 7, name: 'Twitter', image: 'fab fa-twitter-square', hyperLink: 'https://twitter.com/Maxime29463441',
        description: 'Social media and tweets'}
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
        window.open('https://www.facebook.com/maxime.delange', '_blank');
        break;
      case 3 :
        window.open('https://www.linkedin.com/in/maxime-de-lange-867a4165/', '_blank');
        break;
      case 4:
        window.open('https://github.com/felucius', '_blank');
        break;
      case 5:
        window.open('https://www.reddit.com/user/felucius', '_blank');
        break;
      case 6:
        window.open('https://stackoverflow.com/users/4415306/maxime-de-lange', '_blank');
        break;
      case 7:
        window.open('https://twitter.com/Maxime29463441', '_blank');
        break;
    }
  }
}
