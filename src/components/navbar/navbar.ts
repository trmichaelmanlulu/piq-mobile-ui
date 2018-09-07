import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.html'
})
export class NavbarComponent {
  @Input() title: string;

  constructor() {
  }

}
