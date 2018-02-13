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
      {id: 1, name: 'Calories checker', image: 'fas fa-calendar-check', hyperLink: 'https://play.google.com/store/apps/details?id=maximedelange.calorieschecker&hl=nl',
        description: 'Android application that keeps track of your daily calories.'},
      {id: 2, name: 'Piksel tap', image: 'fas fa-gamepad', hyperLink: null,
        description: 'Android click game where the main protagonist needs to defeat enemies to become stronger and better.'},
      {id: 3, name: 'Tasklist manager', image: 'fas fa-tasks', hyperLink: null,
        description: 'Managing daily tasks. Tasks can be added to calendar, email or the app itself.'},
      {id: 4, name: 'Bitcoin currency', image: 'fab fa-bitcoin', hyperLink: null,
        description: 'Keeping track of the Bitcoin value in the valuta of Euro € and Dollars $.'},
      {id: 5, name: 'Computer locker', image: 'fas fa-unlock-alt', hyperLink: null,
        description: 'Android app that serves as a client that can remotely lock a computer.'},
      {id: 6, name: 'Reddcoin lottery', image: 'far fa-money-bill-alt', hyperLink: 'https://reddcoinforfun.com/',
        description: 'Reddcoin lottery for the Reddcoin community'}
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
        window.open('https://play.google.com/store/apps/details?id=maximedelange.calorieschecker&hl=nl', '_blank');
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
      case 6:
        window.open('https://reddcoinforfun.com/', '_blank');
        break;
    }
  }
}
