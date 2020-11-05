import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../models/students';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() eventAdd = new EventEmitter<Student>();

  addStudent(firstName: HTMLFormElement, lastName: HTMLFormElement, classe: HTMLFormElement){
    let student = new Student(firstName.value, lastName.value, classe.value);
    this.eventAdd.emit(student);
  }

}
