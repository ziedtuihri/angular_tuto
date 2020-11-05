import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../models/students';
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input("student") studentInput;
  @Output() studentEvent = new EventEmitter<Student>(); 

  updateStudent(firstName: HTMLFormElement, lastName: HTMLFormElement, classe: HTMLFormElement){
    let student = new Student(firstName.value, lastName.value, classe.value);
    this.studentEvent.emit(student);
  }

}
