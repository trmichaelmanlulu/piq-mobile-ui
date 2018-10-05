import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';

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
    var headerHeight = document.getElementById('header-slides').offsetHeight | document.getElementById('header-slides').clientHeight;
    var nameHeight = document.getElementById('property-name').offsetHeight | document.getElementById('property-name').clientHeight;
    console.log(headerHeight + ' ' + (nameHeight/1.15));
    var offsetScroll = headerHeight - (nameHeight / 1.15);
    console.log(offsetScroll);

    this.content.ionScroll.subscribe(($event: any) => {
      const scrollTop = $event.scrollTop;

      if (scrollTop >= offsetScroll) {
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
