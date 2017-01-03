import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule}  from '@angular/forms';

@NgModule({
declarations:[
    AppComponent,
    
],
imports:[BrowserModule],
providers:[],
bootstrap:[AppComponent]
})

export class AppModule{

}