import { Component, Input } from '@angular/core'
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations'
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
        query('ul', stagger('1200ms', [
          animate('900ms', style({transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})

export class ContactComponent {
  // Fields
  title = 'Contact';
  contacts = [
    'E-MAIL',
    'FACEBOOK',
    'LINKEDIN',
    'GITHUB'
  ];
  show = false;
  router: Router;

  constructor(router: Router){
    this.router = router;
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }

  getHyperLinks(hyperLinkName){
    switch (hyperLinkName){
      case 'E-MAIL':
        this.contacts[0] = 'MAXIME.DE.LANGE@OUTLOOK.COM';
        break;
      case 'FACEBOOK':
        window.location.href = 'https://www.facebook.com/maxime.delange';
        break;
      case 'LINKEDIN':
        window.location.href = 'https://www.linkedin.com/in/maxime-de-lange-867a4165/';
        break;
      case 'GITHUB':
        window.location.href = 'https://github.com/felucius';
        break;
    }
  }
}
