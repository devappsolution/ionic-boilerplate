import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { NativePage } from '../pages/native/native';
import { ComponentPage } from '../pages/components/component';
import { TabsPage } from '../pages/tabs/tabs';

//Components
import { ActionSheetPage } from '../pages/components/action-sheet/action-sheet';
import { AlertPage } from '../pages/components/alert/alert';
import { BadgePage } from '../pages/components/badge/badge';
import { ListButtonsPage } from '../pages/components/button/list-buttons';
import { BasicButtonPage } from '../pages/components/button/basic-button/basic-button';
import { BlockButtonPage } from '../pages/components/button/block-button/block-button';
import { ClearButtonPage } from '../pages/components/button/clear-button/clear-button';
import { OutlineButtonPage } from '../pages/components/button/outline-button/outline-button';
import { RoundButtonPage } from '../pages/components/button/round-button/round-button';
import { FullButtonPage } from '../pages/components/button/full-button/full-button';
import { SizeButtonPage } from '../pages/components/button/size-button/size-button';
import { IconButtonPage } from '../pages/components/button/icon-button/icon-button';
import { CheckBoxPage } from '../pages/components/check-box/check-box';
import { DateTimePage } from '../pages/components/date-time/date-time';
import { FabsPage } from '../pages/components/fabs/fabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    NativePage,
    ComponentPage,
    TabsPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    BasicButtonPage,
    ListButtonsPage,
    BlockButtonPage,
    ClearButtonPage,
    OutlineButtonPage,
    RoundButtonPage,
    FullButtonPage,
    SizeButtonPage,
    IconButtonPage,
    CheckBoxPage,
    DateTimePage,
    FabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    NativePage,
    ComponentPage,
    TabsPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    BasicButtonPage,
    ListButtonsPage,
    BlockButtonPage,
    ClearButtonPage,
    OutlineButtonPage,
    RoundButtonPage,
    FullButtonPage,
    SizeButtonPage,
    IconButtonPage,
    CheckBoxPage,
    DateTimePage,
    FabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
