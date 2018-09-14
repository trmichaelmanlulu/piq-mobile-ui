import { Component } from '@angular/core';

/**
 * Generated class for the PropertyGalleryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-property-gallery',
  templateUrl: 'property-gallery.html'
})
export class PropertyGalleryComponent {

  text: string;

  constructor() {
    console.log('Hello PropertyGalleryComponent Component');
    this.text = 'Hello World';
  }

}
