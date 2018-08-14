import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';// import { RouterModule, Routes } from '@angular/router';

import AppComponent from './app.component';

@NgModule({
  declarations: [AppComponent],
  providers:[
    { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
  imports: [BrowserModule,FormsModule],
  bootstrap: [AppComponent]
})
export default class AppModule { }