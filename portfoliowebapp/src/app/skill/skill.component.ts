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
      {id: 1, name: 'JAVA', image: 'assets/images/iteration3/skill/javalogo.png', description: 'Started learning Java in 2015'},
      {id: 2, name: 'C#', image: 'assets/images/iteration3/skill/csharplogo.png', description: 'Started learning C# in 2014'},
      {id: 3, name: 'HTML', image: 'assets/images/iteration3/skill/htmllogo.jpg', description: 'Started learning HTML in 2014'},
      {id: 4, name: 'CSS', image: 'assets/images/iteration3/skill/csslogo.png', description: 'Started learning CSS in 2014'},
      {id: 5, name: 'JAVASCRIPT', image: 'assets/images/iteration3/skill/javascriptlogo.png', description: 'Started learning Javascript in 2015'},
      {id: 6, name: 'BOOTSTRAP', image: 'assets/images/iteration3/skill/bootstraplogo.png', description: 'Started learning Bootstrap in 2016'},
      {id: 7, name: 'TYPE SCRIPT', image: 'assets/images/iteration3/skill/typescriptlogo.png', description: 'Started learning Typescript in 2017'},
      {id: 8, name: 'SQL', image: 'assets/images/iteration3/skill/sqllogo.png', description: 'Started learning SQL in 2014'},
      {id: 9, name: 'MYSQL', image: 'assets/images/iteration3/skill/mysqllogo.png', description: 'Started learning MYSQL databases in 2014'},
      {id: 10, name: 'ANDROID', image: 'assets/images/iteration3/skill/androidlogo.png', description: 'Started learning Android in 2015'},
      {id: 11, name: 'SWIFT', image: 'assets/images/iteration3/skill/swiftlogo.png', description: 'Started learning Swift in 2016'},
      {id: 12, name: 'GIT', image: 'assets/images/iteration3/skill/gitlogo.png', description: 'Started learning git in 2015'},
      {id: 13, name: 'ANGULAR', image: 'assets/images/iteration3/skill/angularlogo.png', description: 'Started learning Angular 2+ in 2017'},
      {id: 14, name: 'UML', image: 'assets/images/iteration3/skill/umllogo.png', description: 'Started learning UML in 2014'}
    ];
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }
}
