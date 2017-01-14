import { PeopleService } from './person/services/people.service';
import { appRouting } from './app.routes';
import { PersonDetailsComponent } from './person/person-info/person-details.component';
import { PeopleListComponent } from './person/person-info/people-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import{HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    appRouting,

  ],
  declarations: [
    AppComponent,
    PeopleListComponent,
    PersonDetailsComponent,

  ],
  providers:[PeopleService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
