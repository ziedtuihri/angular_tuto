import { Component, OnInit } from '@angular/core';
import { Student } from './models/student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  students : Student[];
  //students = new Array<Student>()
  activeStudent : Student;
  activeIndex : number;
  mode : string;

  showAddForm(){
    this.mode="add";
  }

  showUpdateForm(s : Student, index : number){
    this.activeStudent = s;
    this.activeIndex = index;
    this.mode = "update";
  }

  updateStudent(student : Student){
    console.log("From child component : " + JSON.stringify(student));
    this.students[this.activeIndex] = student;
  }

  addStudent(student : Student){
    console.log("From child component : " + JSON.stringify(student));
    
    this.students.push(student);
  }

  deleteStudent(student : Student, index){
    this.students.splice( index);
  }

  ngOnInit(){
    this.students = [
      new Student("Tounsi", "Ali", "MPDAM1"),
      new Student("Ben Younes", "Sarra", "MPDAM2"),
      new Student("Ben romdhan", "Mohamed", "L3DSI")
    ];
    this.mode = "";
  }

}
