import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';

/**
 * Generated class for the BuildingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-building',
  templateUrl: 'building.html',
})
export class BuildingPage {
  buildingSegment = 'property-details';
  @ViewChild(Content) content: Content;
  @ViewChild('buildingNavbar') buildingNavbar: ElementRef;
  @ViewChild('buildingName') buildingName: ElementRef;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.content.ionScroll.subscribe(($event: any) => {
      const scrollTop = $event.scrollTop;

      if (scrollTop >= 198) {
        this.buildingNavbar.nativeElement.classList.add('colored');
        this.buildingName.nativeElement.classList.add('hide');
      } else {
        this.buildingNavbar.nativeElement.classList.remove('colored');
        this.buildingName.nativeElement.classList.remove('hide');
      }
    });
  }

  resetHeaderScrolled() {
    document.querySelector('.header-image').removeAttribute('style');
  }
  

}
