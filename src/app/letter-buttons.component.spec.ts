import { TestBed } from '@angular/core/testing';
import { LetterButtonsComponent} from './letter-buttons.component';

describe('LetterButtonsComponent', () => {


  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterButtonsComponent]
    });
  });

  fit('should display a button for each letter of the alphabet', () => {
    const fixture = TestBed.createComponent(LetterButtonsComponent);
    fixture.autoDetectChanges();
    const component = fixture.componentInstance;
    const element = <HTMLElement>fixture.nativeElement;
    const buttons = element.querySelectorAll('button');
    //console.log('buttons', buttons.item(0));
    expect(buttons.length).toBe(alphabet.length);
    for (let i = 0; i < alphabet.length; i++) {
      const button = buttons.item(i);
      expect(button.textContent).toBe(alphabet.charAt(i));
      expect(button.disabled).toBe(false);
    }
  });

  it('should add that letter to the selection when a button is clicked', () => {
    const fixture = TestBed.createComponent(LetterButtonsComponent);
    fixture.autoDetectChanges();
    const component = fixture.componentInstance;
    const element = <HTMLElement>fixture.nativeElement;
    const buttons = element.querySelectorAll('button');

    }
  });

});
