import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ShowVentComponent } from './show-vent/show-vent.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEventComponent,
    ShowVentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
