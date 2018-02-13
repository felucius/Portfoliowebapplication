import {Component} from "@angular/core";
import {Home} from "./home-object.component";
import {InterestComponent} from '../interest/interest.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  // Fields
  testing: InterestComponent;
  myInterests = [];

  name = 'Maxime de Lange';
  joke = 'public void sayName(name)';
  joke2 = 'public void showInterests(interest)';
  ambitions: Home[];
  introduction ='Junior programmer with a passion for programming and designing.';

  ngOnInit(){
    this.createAmbition();
    this.test();
  }

  public createAmbition(){
    this.ambitions = [
      {id: 1, description: 'export class MaximeDeLange(){'},
      {id: 2, description: 'ngOnInit(){'},
      {id: 3, description: 'this.introduce()}'},
      {id: 4, description: '};'}
    ]
  }

  public test(){
    this.testing = new InterestComponent();
    this.myInterests = this.testing.createInterests();
  }
}
