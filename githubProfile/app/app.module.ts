import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app.routes';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GithubComponent } from './dashboard/github/github.component';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

@NgModule({
    imports:[BrowserModule,
    FormsModule,
    HttpModule,
    routing, ],
    declarations :[AppComponent,
                    NavbarComponent,
                    HomeComponent,
                    AboutComponent,
                    GithubComponent,],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{

}