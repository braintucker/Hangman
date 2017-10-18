import { Component } from '@angular/core';
import { WordService } from './word.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Guess The Word</h1>
    <p>{{solution | mask:selection}}</p>
    <letter-buttons [(selection)]="selection"></letter-buttons>
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let word of words">
          <td>{{word.word}}</td>
        </tr>
      </table>
    </div>
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
