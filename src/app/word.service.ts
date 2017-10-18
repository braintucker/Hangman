import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WordService {

  private baseUrl = 'https://hangman-data.firebaseio.com/';

  constructor(private http: Http) { }

  getWords() {
    return this.http.get(`${this.baseUrl}/words.json`)
      .toPromise()
      .then(response => response.json());
  }

}
