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
    CardStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
