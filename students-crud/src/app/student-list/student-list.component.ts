import { Component } from '@angular/core';

import { students } from '../students';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})

export class StudentListComponent {

    students = students;

    headElements = ['First Name', 'Last Name', 'Class', 'Update'];

    onSubmit(){
        
    }
}