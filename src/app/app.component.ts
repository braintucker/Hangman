import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Guess The Word</h1>
    <p>{{solution | mask:selection}}</p>
    <letter-buttons></letter-buttons>
  `
})
export class AppComponent {

  solution = 'LOUISIANA';
  selection = '';

}
