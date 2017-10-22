import { Component, Input } from '@angular/core'
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

  animations: [
    trigger('contactAnimation', [
      transition('* => *', [
        query('ul', style({
          transform: 'translateX(-100%)'
        })),
        query('ul', stagger('600ms', [
          animate('900ms', style({transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})

export class ContactComponent {
  // Fields
  title = 'Contact';
  contacts = ['maxime.de.lange@outlook.com', 'facebook/maxime', 'linkedin/maxime', 'github/maxime'];
  show = false;

  constructor(){
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }
}
