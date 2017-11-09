import { Component } from '@angular/core';
import {trigger, transition, query, stagger, style, animate} from '@angular/animations';
import {Interest} from "./interest-object.component";

@Component({
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css'],
})

export class InterestComponent {
  title = 'Interests';
  interests: Interest[];

  constructor(){
    this.createInterests();
  }

  public createInterests(){
    this.interests = [
      {id: 1, name: 'WEB DEVELOPMENT', image: 'assets/images/iteration3/interest/webdevelopment.png',
        description: 'Started with web development since 2016. Learning all new kinds of techniques and skills.'},
      {id: 2, name: 'MOBILE DEVELOPMENT', image: 'assets/images/iteration3/interest/mobiledevelopment.png',
        description: 'Started with mobile development since 2015. Highly interested in Android, but IOS is also a lot of fun.'},
      {id: 3, name: 'BLOCKCHAIN', image: 'assets/images/iteration3/interest/blockchainlogo.png',
        description: 'Blockchain is a new concept for me which I started learning a couple of months ago. Momentarily busy with a project.'},
      {id: 4, name: 'CRYPTOCURRENCY', image: 'assets/images/iteration3/interest/bitcoinlogo.jpg',
        description: 'Early adopter and invester in cryptocurrency. Trading and holding is my game.'},
      {id: 5, name: 'INTERACTIVE DESIGNING', image: 'assets/images/iteration3/interest/interactivedesign.png',
        description: 'Love to design <3'}
    ]
  }
}
