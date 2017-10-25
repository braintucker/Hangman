import { Component, Input } from '@angular/core';

@Component({
  selector: 'word-list',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let word of words">
          <td>{{word.wordName}}</td>
        </tr>
      </table>
    </div>
  `
})
export class WordListComponent {

  @Input() words = [];

}
