import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input("student") st;
  @Output() studentEvent = new EventEmitter<Student>();


  addStudent(nom : HTMLFormElement, prenom: HTMLFormElement, classe : HTMLFormElement){
    var student = new Student(nom.value, prenom.value, classe.value);
    console.log(student);
    this.studentEvent.emit(student);
  }
}
