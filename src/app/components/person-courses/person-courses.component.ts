import { Component, Input } from '@angular/core';
import { PersonCourse } from 'src/app/model/PersonCourse';


@Component({
  selector: 'app-person-courses',
  templateUrl: './person-courses.component.html',
  styleUrls: ['./person-courses.component.css']
})
export class PersonCoursesComponent {

  @Input()
  personCourses: PersonCourse[] = []
}
