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
        query('ul', stagger('1200ms', [
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

  projects: Project[] = [
    {id: 1, name: 'Android - Calories checker', image: 'assets/images/iteration2/calorieschecker.png', hyperLink: 'https://play.google.com/store/apps/details?id=maximedelange.calorieschecker&hl=nl'},
    {id: 2, name: 'Android - Piksel tap', image: 'assets/images/iteration2/pikseltap.png', hyperLink: null},
    {id: 3, name: 'Android - Tasklist manager', image: 'assets/images/iteration2/tasklistmanager.png', hyperLink: null},
    {id: 4, name: 'Android - Bitcoin currency', image: 'assets/images/iteration2/bitcoincurrency.png', hyperLink: null}
  ];

  constructor(router: Router){
    this.router = router;
  }

  get stateName(){
    return this.show ? 'show' : 'hide';
  }

  toggle(){
    this.show = !this.show;
  }
}
