import { Component, OnInit } from '@angular/core';
import { Student } from './models/students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  students : Student[];
  mode : string;
  activeIndex : number;
  activeStudent : Student;

  elements = ["#", "First Name", "Last Name", "Class", "Update", "Delete"];
  title = 'delete-app';

  showUpdate(student:Student, index:number){
    this.mode = "update";
    this.activeIndex = index;
    this.activeStudent = student;
  }

  showAdd(){
    this.mode = "add";
  }

  studentDelete(index:number){
    this.students.splice(index, 1);
  }

  updateStudent(student: Student){
    this.students[this.activeIndex] = student;
    console.log(student.firstName);
  }

  addStudent(student: Student){
    this.students.push(student);
  }

  ngOnInit(): void {
    this.students = [
      new Student("Mohamed", "Manai", "MPDAM"),
      new Student("Karim", "Tounsi", "DSI31"),
      new Student("Chaker", "Rouehi", "BI")
    ];
  }
}
