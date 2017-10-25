import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'word-edit',
  template: `
    <div class="panel panel-primary">
      <div class="panel-body">
        <input type="text" [(ngModel)]="word.wordName"
          placeholder="New Word" style="width: 25%;">
        <button (click)="onSubmit()" class="btn btn-primary">Submit</button>
      </div>
    </div>
  `
})
export class WordEditComponent {

  @Input() word = {};

  @Output() submit = new EventEmitter();


  onSubmit() {
    this.submit.emit(this.word);
  }

}
