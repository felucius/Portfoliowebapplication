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
        query('ul', stagger('600ms', [
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
  skills: Skill[] = [
    {id: 1, name: 'JAVA', image: 'assets/images/iteration2/logo/javalogo.png', framework: '+ WEB FRAMEWORKS'},
    {id: 2, name: 'C#', image: 'assets/images/iteration2/logo/csharplogo.jpg', framework: null},
    {id: 3, name: 'HTML', image: 'assets/images/iteration2/logo/htmllogo.png', framework: null},
    {id: 4, name: 'CSS', image: 'assets/images/iteration2/logo/csslogo.png', framework: null},
    {id: 5, name: 'JAVASCRIPT', image: 'assets/images/iteration2/logo/javascriptlogo.png', framework: null},
    {id: 6, name: 'BOOTSTRAP', image: 'assets/images/iteration2/logo/bootstraplogo.jpg', framework: null},
    {id: 7, name: 'TYPE SCRIPT', image: 'assets/images/iteration2/logo/typescriptlogo.png', framework: null},
    {id: 8, name: 'SQL', image: 'assets/images/iteration2/logo/sqllogo.png', framework: null},
    {id: 9, name: 'MYSQL', image: 'assets/images/iteration2/logo/mysqllogo2.png', framework: null},
    {id: 10, name: 'ANDROID', image: 'assets/images/iteration2/logo/androidlogo.jpg', framework: null},
    {id: 11, name: 'IOS', image: 'assets/images/iteration2/logo/ioslogo.png', framework: null},
    {id: 12, name: 'GIT', image: 'assets/images/iteration2/logo/gitlogo2.png', framework: null},
    {id: 13, name: 'ANGULAR', image: 'assets/images/iteration2/logo/angular2logo.jpeg', framework: null}
  ];

  constructor(){
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }
}
