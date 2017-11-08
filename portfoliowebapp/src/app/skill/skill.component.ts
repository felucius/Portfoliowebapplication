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
      {id: 1, name: 'JAVA', image: 'assets/images/iteration3/skill/javalogo.png', framework: null},
      {id: 2, name: 'C#', image: 'assets/images/iteration3/skill/csharplogo.png', framework: null},
      {id: 3, name: 'HTML', image: 'assets/images/iteration3/skill/htmllogo.jpg', framework: null},
      {id: 4, name: 'CSS', image: 'assets/images/iteration3/skill/csslogo.png', framework: null},
      {id: 5, name: 'JAVASCRIPT', image: 'assets/images/iteration3/skill/javascriptlogo.png', framework: null},
      {id: 6, name: 'BOOTSTRAP', image: 'assets/images/iteration3/skill/bootstraplogo.png', framework: null},
      {id: 7, name: 'TYPE SCRIPT', image: 'assets/images/iteration3/skill/typescriptlogo.png', framework: null},
      {id: 8, name: 'SQL', image: 'assets/images/iteration3/skill/sqllogo.png', framework: null},
      {id: 9, name: 'MYSQL', image: 'assets/images/iteration3/skill/mysqllogo.png', framework: null},
      {id: 10, name: 'ANDROID', image: 'assets/images/iteration3/skill/androidlogo.png', framework: null},
      {id: 11, name: 'SWIFT', image: 'assets/images/iteration3/skill/swiftlogo.png', framework: null},
      {id: 12, name: 'GIT', image: 'assets/images/iteration3/skill/gitlogo.png', framework: null},
      {id: 13, name: 'ANGULAR', image: 'assets/images/iteration3/skill/angularlogo.png', framework: null},
      {id: 14, name: 'UML', image: 'assets/images/iteration3/skill/umllogo.png', framework: null}
    ];
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }
}
