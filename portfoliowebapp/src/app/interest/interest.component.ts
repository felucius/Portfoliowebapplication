import { Component } from '@angular/core';
import {Interest} from "./interest-object.component";

@Component({
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css'],
})

export class InterestComponent {
  title = 'Interests';
  interests: Interest[];

  ngOnInit(){
  }

  public createInterests(){
    this.interests = [
      {id: 1, name: 'Webapplication development', image: 'fas fa-desktop',
        description: 'Developing webapplication in front- and backend'},
      {id: 2, name: 'Design patterns and styling', image: 'fas fa-paint-brush',
        description: 'Love to do the nitty-gritty stuff with designing and try to stay up-to-date with modern designing patterns and styles.'},
      {id: 3, name: 'Blockchain technologies', image: 'fas fa-th',
        description: 'Blockchain is a new concept for me which I started learning a couple of months ago. Momentarily busy with a project.'},
      {id: 4, name: 'Dedication and working hard', image: 'fab fa-black-tie',
        description: 'Early adopter and invester in cryptocurrency. Trading and holding is my game.'},
      {id: 5, name: 'Mobile development', image: 'fas fa-mobile-alt',
        description: 'Started with mobile development since 2015. Highly interested in Android, but IOS is also a lot of fun.'},
      {id: 6, name: 'Friends, familiy and pets', image: 'fas fa-users',
        description: 'Like to spend time with family and friends'},
      {id: 7, name: 'Daily learner', image: 'fas fa-book',
        description: 'I like to educate myself by learning and building tons of cool stuff.'},
      {id: 8, name: 'Bug fixing', image: 'fas fa-wrench',
        description: 'Fix what you have destroyed! Not only building, but also bug fixing is something I much appreciate'},
      {id: 9, name: 'Developer', image: 'fas fa-coffee',
        description: 'I am a true developer. I love to create new technologies with a nice cup of coffee'},
      {id: 10, name: 'Code writing', image: 'fas fa-pencil-alt',
        description: 'Fix what you have destroyed! Not only building, but also bug fixing is something I much appreciate'},
      {id: 11, name: 'Punctual', image: 'far fa-clock',
        description: 'Punctuation is important to me. I'},
      {id: 12, name: 'Innovating', image: 'fas fa-cogs',
        description: 'Keeping myself informed what is happening around the world and not affraid of change'},
    ]

    return this.interests;
  }
}
