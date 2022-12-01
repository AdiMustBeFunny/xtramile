import { Injectable } from '@angular/core';
import { CourseFromApi } from '../model/CourseFromApi';
import { Person } from '../model/Person';
import { PersonCourse } from '../model/PersonCourse';
import { PersonProject } from '../model/PersonProject';

@Injectable({
  providedIn: 'root'
})
export class ApiDataToPersonArrayMapperService {
  constructor() { }
  map(projects: CourseFromApi[]):Person[]{
    const people:Person[] = []

    projects.forEach(project =>{
      let person = people.find(p => p.Person == project.Person)

    if(!person){
      person = new Person(project.Person,[
        new PersonCourse(project.Course,project.CourseId,[
          new PersonProject(project.Project,project.ProjectId,project.OpenedLessonsCount,project.CompletedLessonsCount,project.TotalLessonsCount)
        ])
      ])
      people.push(person)
    } else{
      let course = person.Courses.find(c => c.CourseId == project.CourseId)
      if(!course){
        course = new PersonCourse(project.Course,project.CourseId,[
          new PersonProject(project.Project,project.ProjectId,project.OpenedLessonsCount,project.CompletedLessonsCount,project.TotalLessonsCount)
        ])
        person.Courses.push(course)
      } else{
        course.Projects.push(
          new PersonProject(project.Project,project.ProjectId,project.OpenedLessonsCount,project.CompletedLessonsCount,project.TotalLessonsCount)
        )
      }
    }
    })

    return people
  }
}
