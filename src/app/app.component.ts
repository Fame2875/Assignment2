import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment2';
  userInput:number =0;
  toggle = false;
leapYear()
{
  this.toggle = !this.toggle;
  //this.toggle = true;
  return ((this.userInput % 4 == 0) && ((this.userInput % 100 != 0)) || ((this.userInput % 400 == 0)));

}
  }
 

