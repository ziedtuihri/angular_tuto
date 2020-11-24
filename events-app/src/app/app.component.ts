import { Component } from '@angular/core';

import { Event } from './model/event';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 


    events: Event[];
    mode: string;

    activEvent: Event;
    acticIndex: number;

    addEvent(event:Event){
        if(localStorage.getItem('Events') != null )
         this.events = JSON.parse(localStorage.getItem("Events"));
         else
         localStorage.setItem('Events', JSON.stringify(this.events));
    
         this.events.push(event);
    
         localStorage.setItem('Events', JSON.stringify(this.events));
         console.log("all events " + localStorage.getItem('Events'));
      }

      deleteEvent(index:number){
        this.events.splice(index, 1);
        localStorage.setItem('Events', JSON.stringify(this.events));
      }

      showAdd(){
        this.mode = "add";
      }

      showUpdate(event: Event, index:number){
          this.mode = "update";
          this.acticIndex = index;
          this.activEvent = event;
      }

      update(event: Event){
          this.events[this.acticIndex] = event;
          localStorage.setItem('Events', JSON.stringify(this.events));
      }

    ngOnInit() {
    
    if(localStorage.getItem('Events') == null ){
      this.events = [
      new Event("Title","11/11/2020","12/11/2020","description","owner","1"),
      new Event("Title 2","13/11/2020","15/11/2020","description 2","owner 2","2")
    ];
    }else{
        this.events = JSON.parse(localStorage.getItem("Events"));
    }

    }
}
