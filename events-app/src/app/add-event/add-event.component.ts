import { Component, OnInit } from '@angular/core';

import { Event } from '../model/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  events: Event[];
  event: Event;

  constructor() { }

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
     this.events = JSON.parse(localStorage.getItem("Events"));
     this.events.push(new Event(this.title,
                                this.startDate.toLocaleDateString(),
                                this.endDate.toLocaleDateString(),
                                this.description, this.owner));

     localStorage.setItem('Events', JSON.stringify(this.events));
     console.log("all events " + localStorage.getItem('Events'));
  }

  ngOnInit(): void {

    this.events = [
      new Event("Title","11/11/2020","12/11/2020","description","owner"),
      new Event("Title 2","13/11/2020","15/11/2020","description 2","owner 2")
    ];

    console.log("all events \n" + localStorage.getItem('Events'));

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
