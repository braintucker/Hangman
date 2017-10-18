import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaskPipe } from './mask.pipe';
import { LetterButtonsComponent } from './letter-buttons.component';
import { WordService } from './word.service';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, MaskPipe, LetterButtonsComponent],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
