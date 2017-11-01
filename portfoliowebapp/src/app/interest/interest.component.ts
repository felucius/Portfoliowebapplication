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
  interests: Interest[];

  constructor(){
    this.createInterests();
  }

  public createInterests(){
    this.interests = [
      {id: 1, name: 'WEB DEVELOPMENT', image: 'assets/images/iteration2/logo/computerscreenlogo.png',
        description: 'Started with web development since 2016. Learning all new kinds of techniques and skills.'},
      {id: 2, name: 'MOBILE DEVELOPMENT', image: 'assets/images/iteration2/logo/mobilescreenlogo.png',
        description: 'Started with mobile development since 2015. Highly interested in Android, but IOS is also a lot of fun.'},
      {id: 3, name: 'BLOCKCHAIN', image: 'assets/images/iteration2/logo/blockchainlogo.png',
        description: 'Blockchain is a new concept for me which I started learning a couple of months ago. Momentarily busy with a project.'},
      {id: 4, name: 'CRYPTOCURRENCY', image: 'assets/images/iteration2/logo/bitcoinlogo.png',
        description: 'Early adopter and invester in cryptocurrency. Trading and holding is my game.'},
      {id: 5, name: 'INTERACTIVE DESIGNING', image: 'assets/images/iteration2/logo/interactivedesignlogo.png',
        description: 'Love to design <3'}
    ]
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }
}
