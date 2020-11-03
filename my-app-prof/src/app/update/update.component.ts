import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../models/student';


@Component({
    selector: "app-update",
    templateUrl:"./update.component.html"
})
export class UpdateComponent{
  @Input("student") st;
  @Output() studentEvent = new EventEmitter<Student>();


  updateStudent(nom : HTMLFormElement, prenom: HTMLFormElement, classe : HTMLFormElement){
    var student = new Student(nom.value, prenom.value, classe.value);
    console.log(student);
    this.studentEvent.emit(student);
  }
}
