import { PersonProject } from "./PersonProject"

export class PersonCourse{
    Course:string
    CourseId:string
    Projects: PersonProject[]
    constructor(course:string,
        courseId:string,
        projects: PersonProject[]){
            this.Course = course
            this.CourseId = courseId
            this.Projects = projects
    }
}