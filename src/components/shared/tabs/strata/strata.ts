import { Component } from '@angular/core';

/**
 * Generated class for the StrataComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-strata',
  templateUrl: 'strata.html'
})
export class StrataComponent {

  text: string;

  constructor() {
    console.log('Hello StrataComponent Component');
    this.text = 'Hello World';
  }

}
