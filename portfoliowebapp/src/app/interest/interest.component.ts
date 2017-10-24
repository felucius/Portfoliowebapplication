import { Component } from '@angular/core';
import {trigger, transition, query, stagger, style, animate} from '@angular/animations';
import {Interest} from "./interest-object.component";

@Component({
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css'],

  animations: [
    trigger('skillAnimation', [
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

export class InterestComponent {
  title = 'Interests';
  show = false;
  interests: Interest[] = [
    {id: 1, name: 'WEB DEVELOPMENT', image: 'assets/images/iteration2/logo/computerscreenlogo.png'},
    {id: 2, name: 'MOBILE DEVELOPMENT', image: 'assets/images/iteration2/logo/mobilescreenlogo.png'},
    {id: 3, name: 'BLOCKCHAIN', image: 'assets/images/iteration2/logo/blockchainlogo.png'},
    {id: 4, name: 'CRYPTOCURRENCY', image: 'assets/images/iteration2/logo/bitcoinlogo.png'},
    {id: 5, name: 'INTERACTIVE DESIGNING', image: 'assets/images/iteration2/logo/interactivedesignlogo.png'}
  ]

  constructor(){

  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }
}
