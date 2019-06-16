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
import { CadFornecedorPage } from '../pages/cad-fornecedor/cad-fornecedor';
import { CadFornecedorPageModule } from '../pages/cad-fornecedor/cad-fornecedor.module';
import { BuyCreditsPage } from '../pages/buy-credits/buy-credits';
import { BuyCreditsPageModule } from '../pages/buy-credits/buy-credits.module';
import { OffersPage } from '../pages/offers/offers';
import { OffersPageModule } from '../pages/offers/offers.module';
import { OfferDetailPageModule } from '../pages/offer-detail/offer-detail.module';
import { OfferDetailPage } from '../pages/offer-detail/offer-detail';
import { CheckOutPageModule } from '../pages/check-out/check-out.module';
import { CheckOutPage } from '../pages/check-out/check-out';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:"Voltar"
    }),
    IntroPageModule,
    DecisionPageModule,
    CadcontratantePageModule,
    ChoosetaskPageModule,
    ChoosetaskformPageModule,
    EndintroPageModule,
    CadFornecedorPageModule,
    BuyCreditsPageModule,
    OffersPageModule,
    OfferDetailPageModule,
    CheckOutPageModule
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
    EndintroPage,
    CadFornecedorPage,
    BuyCreditsPage,
    OffersPage,
    OfferDetailPage,
    CheckOutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
