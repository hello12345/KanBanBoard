import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CommonModule }   from '@angular/common';
import { AppComponent } from './app.component';
import { jqxKanbanModule } from 'jqwidgets-ng/jqxkanban';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxKanbanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
