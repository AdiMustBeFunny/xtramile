import { Component, Input } from '@angular/core';
import { PersonProject } from 'src/app/model/PersonProject';


@Component({
  selector: 'app-person-projects',
  templateUrl: './person-projects.component.html',
  styleUrls: ['./person-projects.component.css']
})
export class PersonProjectsComponent {

  @Input()
  personProjects :PersonProject[] = []

  courseInProgress(project: PersonProject):boolean{
    return project.OpenedLessonsCount > 0 && project.CompletedLessonsCount < project.TotalLessonsCount;
  }
  courseNotStarted(project: PersonProject):boolean{
    return project.OpenedLessonsCount == 0;
  }
  courseCompleted(project: PersonProject):boolean{
    return project.CompletedLessonsCount === project.TotalLessonsCount;
  }
}
