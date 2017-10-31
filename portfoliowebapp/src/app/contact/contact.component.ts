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
      {id: 1, name: 'E-MAIL', image: 'assets/images/iteration2/logo/emaillogo.png', hyperLink: null},
      {id: 2, name: 'FACEBOOK', image: 'assets/images/iteration2/logo/facebooklogo.png', hyperLink: 'https://www.facebook.com/maxime.delange'},
      {id: 3, name: 'LINKEDIN', image: 'assets/images/iteration2/logo/linkedinlogo.png', hyperLink: 'https://www.linkedin.com/in/maxime-de-lange-867a4165/'},
      {id: 4, name: 'GITHUB', image: 'assets/images/iteration2/logo/gitlogo.jpg', hyperLink: 'https://github.com/felucius'}
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
      case 1:
        this.contacts[0].name = 'MAXIME.DE.LANGE@OUTLOOK.COM';
        break;
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
