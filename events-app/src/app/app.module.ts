import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ShowEventComponent } from './show-event/show-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { UpdateEventComponent } from './update-event/update-event.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    CardModule,
    InputSwitchModule,
    ButtonModule,
    InputTextModule,
    VirtualScrollerModule
  ],
  declarations: [ AppComponent, ShowEventComponent, AddEventComponent, UpdateEventComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
