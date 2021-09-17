import { Component } from '@angular/core';

// this class is the component viewmodel
// it houses the data to be rendered by the view (html)
@Component({
  selector: 'app-root', // custom html tag eg <app-root>
  templateUrl: './app.component.html', // file containing the component html
  styleUrls: ['./app.component.css'] // contains style for component
})
export class AppComponent {
  message = "This is my first angular app"

  // handleSomeoneMadeUnemployed(name: string) {
  //   console.log(`app-root: ${name} got fired lmao`);
  // }
}

