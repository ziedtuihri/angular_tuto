import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../model/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event;

  constructor() { }

  @Input("Event") evt;
  @Output() eventAdd = new EventEmitter<Event>();

  startDate: Date;
  endDate: Date;
    
  dates: Date[];

  title: string;
  owner: string;
  description: string;

  rangeDates: Date[];

  minDate: Date;

  maxDate: Date;

  es: any;

  invalidDates: Array<Date>


  addEvent(){
     this.event = new Event(this.title,
                            this.startDate.toLocaleDateString(),
                            this.endDate.toLocaleDateString(),
                            this.description, this.owner,
                            Math.floor(Math.random() * (6 - 1 + 1) + 1).toString());
      this.title= "";
      this.startDate = null;
      this.endDate = null;
      this.description = "";
      this.owner = "";


    this.eventAdd.emit(this.event);               
  }

  ngOnInit(): void {

    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

  let today = new Date();
  let month = today.getMonth();
  let year = today.getFullYear();
  let prevMonth = (month === 0) ? 11 : month -1;
  let prevYear = (prevMonth === 11) ? year - 1 : year;
  let nextMonth = (month === 11) ? 0 : month + 1;
  let nextYear = (nextMonth === 0) ? year + 1 : year;
  this.minDate = new Date();
  this.minDate.setMonth(prevMonth);
  this.minDate.setFullYear(prevYear);
  this.maxDate = new Date();
  this.maxDate.setMonth(nextMonth);
  this.maxDate.setFullYear(nextYear);

  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);
  this.invalidDates = [today,invalidDate];
  }

}
