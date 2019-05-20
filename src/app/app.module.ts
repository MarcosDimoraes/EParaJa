import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { IntroPageModule } from '../pages/intro/intro.module';
import { DecisionPageModule } from '../pages/decision/decision.module';
import { DecisionPage } from '../pages/decision/decision';
import { CadcontratantePageModule } from '../pages/cadcontratante/cadcontratante.module';
import { CadcontratantePage } from '../pages/cadcontratante/cadcontratante';
import { ChoosetaskPageModule } from '../pages/choosetask/choosetask.module';
import { ChoosetaskPage } from '../pages/choosetask/choosetask';
import { ChoosetaskformPage } from '../pages/choosetaskform/choosetaskform';
import { ChoosetaskformPageModule } from '../pages/choosetaskform/choosetaskform.module';
import { EndintroPageModule } from '../pages/endintro/endintro.module';
import { EndintroPage } from '../pages/endintro/endintro';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    DecisionPageModule,
    CadcontratantePageModule,
    ChoosetaskPageModule,
    ChoosetaskformPageModule,
    EndintroPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IntroPage,
    DecisionPage,
    CadcontratantePage,
    ChoosetaskPage,
    ChoosetaskformPage,
    EndintroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
