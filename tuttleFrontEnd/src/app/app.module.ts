import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardComponent } from './ui/card/card.component';
import { HeaderComponent } from './ui/header/header.component';
import {MainComponent} from './routes/main/main.component';
import {AppRoutingModule} from './app-routing.module';
import { SearchComponent } from './ui/search/search.component';
import { CalendarComponent } from './ui/calendar/calendar.component';
import {CardHttpService} from './http-services/repository/card-http.service';
import { CreateCardComponent } from './ui/create-card/create-card.component';
import {CardStateService} from './client-services/card-state.service';
import {HttpClientModule} from '@angular/common/http';
import {FilterStateService} from './client-services/filter-state.service';
import {FilterHttpService} from './http-services/repository/filter-http.service';
import {CampaginStateService} from './client-services/campagin-state.service';
import {CampaignHttpService} from './http-services/repository/campaign-http.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    HeaderComponent,
    SearchComponent,
    CalendarComponent,
    CreateCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CardHttpService,
    CardStateService,
    FilterStateService,
    FilterHttpService,
    CampaginStateService,
    CampaignHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
