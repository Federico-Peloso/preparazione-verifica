import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  title = 'List of course'
  courses = ['course1', 'course2', 'course3', 'course4']
}
