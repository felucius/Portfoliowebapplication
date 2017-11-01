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
      {id: 1, name: 'Android - Calories checker', image: 'assets/images/iteration2/logo/calorieschecker.png', hyperLink: 'https://play.google.com/store/apps/details?id=maximedelange.calorieschecker&hl=nl'},
      {id: 2, name: 'Android - Piksel tap', image: 'assets/images/iteration2/logo/pikseltap.png', hyperLink: null},
      {id: 3, name: 'Android - Tasklist manager', image: 'assets/images/iteration2/logo/tasklistmanager.png', hyperLink: null},
      {id: 4, name: 'Android - Bitcoin currency', image: 'assets/images/iteration2/logo/bitcoincurrency.png', hyperLink: null},
      {id: 5, name: 'Android - Computer locker', image: 'assets/images/iteration2/logo/computerocker.png', hyperLink: null}
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
