import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Main app index.
import { AppComponent } from './app.component';

// Import navigation route.
import { RouterModule, Routes } from '@angular/router';

// Router navigation imports.
import {InterestComponent} from './interest/interest.component';
import {SkillComponent} from './skill/skill.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectComponent} from "./project/project.component";

// Import animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Import smart routing
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const appRoutes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'interests',
    component: InterestComponent
  },
  {
    path: 'skills',
    component: SkillComponent
  },
  {
    path: 'projects',
    component: ProjectComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InterestComponent,
    SkillComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes, {
        useHash: false
      }
    )
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
