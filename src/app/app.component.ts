import { Component } from '@angular/core';
import { WordService } from './word.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Guess The Word</h1>
    <p>{{solution | mask:selection}}</p>
    <letter-buttons [(selection)]="selection"></letter-buttons>
    <word-list [words]="words"></word-list>    
  `
})
export class AppComponent {

  words = [];

  solution = 'LOUISIANA';
  selection = '';

  constructor(private wordService: WordService){
    this.wordService.getWords()
      .then(words => this.words = words);
  }

}
