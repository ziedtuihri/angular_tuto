import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event';
import { Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.startDate = new Date(this.evt.startDate);
    this.endDate = new Date(this.evt.endDate);
    this.title = this.evt.title;
    this.owner = this.evt.ownerName;
    this.description = this.evt.description;
  }

  startDate: Date;
  endDate: Date;
  title: string;
  owner: string;
  description: string;

  @Input("updateEvent") evt;
  @Output() eventUpdate = new EventEmitter<Event>();

  updateEvent(){
    let event = new Event(this.title,
      this.startDate.toLocaleDateString(),
      this.endDate.toLocaleDateString(),
      this.description, 
      this.owner,
      Math.floor(Math.random() * (6 - 1 + 1) + 1).toString() );

      this.eventUpdate.emit(event);
  }

  getDate(): Date{
    return new Date();
  }
}
