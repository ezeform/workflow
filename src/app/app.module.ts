import { HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AlertModule, CollapseModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {FooterComponent} from './core/footer/footer.component';
import {JumbotronComponent} from './core/jumbotron/jumbotron.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {EventcardComponent} from './event/eventcard/eventcard.component';
import {EventService} from './shared/event.service';
import {LoggedInGuardGuard} from './shared/logged-in-guard.guard';
import {TicketService} from './shared/ticket.service';
import {UserService} from './shared/user.service';
import {TicketDetailsCardComponent} from './ticket/ticket-details-card/ticket-details-card.component';
import {BiddingCardComponent} from './ticket/bidding-card/bidding-card.component';

import {MomentModule} from 'angular2-moment';
import 'moment/locale/hu';
import {TicketBidFormComponent} from './ticket/ticket-bid-form/ticket-bid-form.component';
import {LoadingSpinnerComponent} from './core/loading-spinner/loading-spinner.component';
import {BidService} from './shared/bid.service';
import {environment} from "../environments/environment";
import { FormioModule } from 'angular-formio';
import { GridsterModule } from 'angular-gridster2';

import { FabricLabelModule } from './lib/label/label.module';
import { FabricSpinnerModule } from './lib/spinner/spinner.module';
import { FabricCommandBarModule } from './lib/commandbar/commandbar.module';
import { FabricNavBarModule } from './lib/nav-bar/nav-bar.module';
import * as fabricIcons from '@uifabric/icons';
import * as firebase from 'firebase';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { WindowRef } from '../services/window-ref';


loadTheme({
  palette: {
    'themePrimary': '#004578',
    'neutralLighter': '#005a9e',
    'neutralLighterAlt': '#2b88d8',
    'neutralLight': '#106ebe',
    'neutralQuaternaryAlt': '#106ebe',
    'neutralQuaternary': '#106ebe',
    'themeDarkAlt': '#f4f4f4',
    'neutralPrimary': '#eaeaea',
    'neutralSecondary': '#f4f4f4',
    'neutralDark': '#f8f8f8',
    'themeDarker': '#f4f4f4',
    'black': '#ffffff',
    'themeDark': '#f4f4f4'
  }
});

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    EventcardComponent,
    FooterComponent,
    ...AppRoutingModule.routableComponents,
    TicketDetailsCardComponent,
    BiddingCardComponent,
    TicketBidFormComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    FormioModule,
    FabricLabelModule,
    FabricSpinnerModule,
    FabricCommandBarModule,
    FabricNavBarModule,
    GridsterModule
  ],
  providers: [
    EventService,
    UserService,
    TicketService,
    LoggedInGuardGuard,
    BidService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    firebase.initializeApp(environment.firebase);
    fabricIcons.initializeIcons();    
  }
}
