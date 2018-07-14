import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CardComponent } from './ui/card/card.component';
import { HeaderComponent } from './ui/header/header.component';
import {MainComponent} from './routes/main/main.component';
import {AppRoutingModule} from './app-routing.module';
import { SearchComponent } from './ui/search/search.component';
import { CalendarComponent } from './ui/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    HeaderComponent,
    SearchComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
