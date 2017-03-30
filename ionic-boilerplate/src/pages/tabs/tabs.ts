import { Component } from '@angular/core';

import { ComponentPage } from '../components/component';
import { NativePage } from '../native/native';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  componentPage: any = ComponentPage;
  native: any = NativePage;
  about: any = AboutPage;

  constructor() {

  }
}
