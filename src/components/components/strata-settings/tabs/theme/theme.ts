import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { BrandingProvider } from '../../../../../providers/branding/branding';

// import { StrataApiService } from '../../../admin/modules/strata/services/strata-api.service';
// import { NotifyService } from '../../../../../../services/notify.service';

/**
 * Generated class for the ThemeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-theme',
  templateUrl: 'theme.html'
})
export class ThemeComponent implements OnDestroy {
  brandingParams =  this.brandingProvider.branding;
  isBrandingChanged = true;

  constructor(
    private renderer: Renderer2,
    private brandingProvider: BrandingProvider,
    // private apiService: StrataApiService,
  ) {
    this.brandingProvider.renderer = this.renderer;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.setDefaultTheme();
  }

  onActivatePrimaryColor(theme, id) {
    this.isBrandingChanged = true;
    this.brandingParams.primary.id = id;
    this.brandingProvider.setPrimaryColor(theme);
  }

  onActivateBgColor(theme, id) {
    this.isBrandingChanged = true;
    this.brandingParams.bgColor.id = id;
    this.brandingProvider.setBackgroundColor(theme);
  }

  // onSaveBranding() {
  //   const branding = JSON.parse(localStorage.getItem('theme-branding'));
  //   const _brandingParams = {
  //       id: this.brandingService.branding.id,
  //       strataId: this.brandingParams.strataId,
  //       bgColorId: this.brandingParams.bgColor.id,
  //       primaryColorId: this.brandingParams.primary.id,
  //       favIconUrl: this.brandingParams.favIconUrl,
  //       iconUrl: this.brandingParams.iconUrl,
  //       headerLogoUrl: this.brandingParams.headerLogoUrl,
  //       headerText: this.brandingParams.headerText
  //   };
  //   if (this.isBrandingChanged) {
  //     this.apiService.saveStrata('/branding/save', _brandingParams).subscribe(response => {
  //       this.isBrandingChanged = false;
  //       this.brandingParams.primary.value = this.brandingService.primaryColor;
  //       this.brandingParams.bgColor.value = this.brandingService.backgroundColor;
  //       this.brandingService.setBranding(this.brandingParams);
  //       // this.notifyService.showSuccess('Theme has been successfully saved.');
  //     }, error => {
  //       this.isBrandingChanged = false;
  //       // this.notifyService.showError('Saving theme has failed.');
  //     });
  //   }
  // }

  setDefaultTheme() {
    const branding = JSON.parse(localStorage.getItem('theme-branding'));
    this.brandingProvider.setPrimaryColor(branding.primary.value);
    this.brandingProvider.setBackgroundColor(branding.bgColor.value);
  }

}
