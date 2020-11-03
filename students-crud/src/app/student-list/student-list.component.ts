import { Component } from '@angular/core';

import { students } from '../students';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})

export class StudentListComponent {

    students = students;

    registerForm: FormGroup;

    headElements = ['First Name', 'Last Name', 'Class', 'Update'];

    onSubmit(){

    }

    public update(index){
        alert(students[index].lastName + "  hellooooooo  " + students[index].firstName);
    }
}