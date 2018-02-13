import { Component } from '@angular/core';
import {Skill} from "./skill-object.component";
import {trigger, transition, query, style, stagger, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],

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

export class SkillComponent {
  // Fields
  title = 'Skills';
  show = false;
  skills: Skill[];

  constructor(){
    this.createSkills();
  }

  public createSkills(){
    this.skills = [
      {id: 1, name: 'Java skill', image: 'icon-java-bold', description: '++++'},
      {id: 2, name: 'C# skill', image: 'icon-csharp', description: '++++'},
      {id: 3, name: 'Html skill', image: 'icon-html5', description: '++++'},
      {id: 4, name: 'Css skill', image: 'icon-css3', description: '++++'},
      {id: 5, name: 'Javascript skill', image: 'icon-javascript', description: '+++'},
      {id: 6, name: 'Bootstrap skill', image: 'icon-bootstrap', description: '++++'},
      {id: 7, name: 'Php skill', image: 'icon-php-alt', description: '++'},
      {id: 8, name: 'Npm skill', image: 'icon-npm', description: '++'},
      {id: 9, name: 'Mysql skill', image: 'icon-mysql', description: '++++'},
      {id: 10, name: 'Android skill', image: 'fab fa-android', description: '+++'},
      {id: 11, name: 'Swift skill', image: 'fab fa-app-store-ios', description: '++'},
      {id: 12, name: 'Git skill', image: 'fab fa-github-square', description: '+++'},
      {id: 13, name: 'Angular skill', image: 'icon-angular', description: '++'},
      {id: 14, name: 'Uml skill', image: 'fab fa-connectdevelop', description: '++++'},
      {id: 15, name: 'Raspberryi skill', image: 'icon-raspberrypi', description: '++'}
    ];
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }
}
