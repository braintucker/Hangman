import { Component, Input } from '@angular/core';

@Component({
  selector: 'word-edit',
  template: `
    <div class="panel panel-primary">
      <div class="panel-body">
        <input type="text" placeholder="New Word">        
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  `
})
export class WordEditComponent {


}
