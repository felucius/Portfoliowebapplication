import { Component } from '@angular/core'
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations'
import {Router} from '@angular/router';

// Import project class
import {Project} from './project-object.component';

@Component({
  selector: 'app-root',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],

  animations: [
    trigger('projectAnimation', [
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

export class ProjectComponent {
  // Fields
  title = 'Project';
  show = false;
  router: Router;
  projects: Project[];

  constructor(router: Router){
    this.router = router;
    this.createProjects();
  }

  public createProjects(){
    this.projects = [
      {id: 1, name: 'Android - Calories checker', image: 'assets/images/iteration3/project/calorieschecker.png', hyperLink: 'https://play.google.com/store/apps/details?id=maximedelange.calorieschecker&hl=nl',
        description: 'Android application that keeps track of your daily calories.'},
      {id: 2, name: 'Android - Piksel tap', image: 'assets/images/iteration3/project/pikseltap.png', hyperLink: null,
        description: 'Android click game where the main protagonist needs to defeat enemies to become stronger and better.'},
      {id: 3, name: 'Android - Tasklist manager', image: 'assets/images/iteration3/project/tasklistmanager.png', hyperLink: null,
        description: 'Managing daily tasks. Tasks can be added to calendar, email or the app itself.'},
      {id: 4, name: 'Android - Bitcoin currency', image: 'assets/images/iteration3/project/bitcoincurrency.png', hyperLink: null,
        description: 'Keeping track of the Bitcoin value in the valuta of Euro € and Dollars $.'},
      {id: 5, name: 'Android - Computer locker', image: 'assets/images/iteration3/project/computerlocker.png', hyperLink: null,
        description: 'Android app that serves as a client that can remotely lock a computer.'}
    ];
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }

  setHyperLinks(hyperLinkID){
    switch (hyperLinkID){
      case 1:
        location.href = 'https://play.google.com/store/apps/details?id=maximedelange.calorieschecker&hl=nl';
        break;
        /*
      case 2:
        location.href = '';
        break;
      case 3:
        location.href = '';
        break;
      case 4:
        location.href = '';
        break;
        */
    }
  }
}
